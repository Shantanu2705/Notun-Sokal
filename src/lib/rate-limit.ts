interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAtMs: number;
}

interface MemoryBucket {
  count: number;
  resetAtMs: number;
}

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const MAX_MAP_SIZE = 2000;

const memoryStore = new Map<string, MemoryBucket>();

function pruneExpiredBuckets(now: number): void {
  if (memoryStore.size < MAX_MAP_SIZE) return;
  for (const [key, bucket] of memoryStore.entries()) {
    if (bucket.resetAtMs <= now) {
      memoryStore.delete(key);
    }
  }
}

async function checkUpstashRateLimit(
  identifier: string
): Promise<RateLimitResult | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const key = `ratelimit:contact:${identifier}`;
  const now = Date.now();
  const windowSeconds = Math.ceil(WINDOW_MS / 1000);

  try {
    const response = await fetch(`${url.replace(/\/+$/, "")}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, windowSeconds, "NX"],
      ]),
      cache: "no-store",
    });

    if (!response.ok) return null;

    const results = (await response.json()) as Array<{ result?: number }>;
    const count = Number(results[0]?.result ?? 1);

    return {
      allowed: count <= MAX_REQUESTS,
      remaining: Math.max(0, MAX_REQUESTS - count),
      resetAtMs: now + WINDOW_MS,
    };
  } catch {
    return null;
  }
}

export async function checkContactRateLimit(
  identifier: string
): Promise<RateLimitResult> {
  const upstashResult = await checkUpstashRateLimit(identifier);
  if (upstashResult) return upstashResult;

  const now = Date.now();
  pruneExpiredBuckets(now);

  const existing = memoryStore.get(identifier);
  if (!existing || existing.resetAtMs <= now) {
    const bucket: MemoryBucket = {
      count: 1,
      resetAtMs: now + WINDOW_MS,
    };
    memoryStore.set(identifier, bucket);
    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      resetAtMs: bucket.resetAtMs,
    };
  }

  existing.count += 1;
  memoryStore.set(identifier, existing);

  return {
    allowed: existing.count <= MAX_REQUESTS,
    remaining: Math.max(0, MAX_REQUESTS - existing.count),
    resetAtMs: existing.resetAtMs,
  };
}
