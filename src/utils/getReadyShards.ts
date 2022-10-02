/**
 * returns a list of all ready shards
 * @param bot Bot
 * @param shardCount shard count
 * @returns array of ready shards
 */
export default async function getReadyShards(
  bot: any,
  shardCount: number
): Promise<number[]> {
  const activeShards: number[] = [];
  for (let s = 0; s < shardCount; s++)
    await bot.client.shard
      ?.broadcastEval((c: any) => c.readyTimestamp, { shard: s })
      .then((a: number) => a && activeShards.push(s))
      .catch(() => void 0);
  return activeShards;
}
