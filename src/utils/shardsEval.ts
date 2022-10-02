/**
 * Runs code on specified shards and returns the results
 * @param bot Bot
 * @param shards shards to run the code on
 * @param code code to run on the shards
 * @returns results of the code
 */
export default async function shardsEval(
  bot: any,
  shards: number[],
  code: (client: any) => Promise<any> | any
): Promise<any[]> {
  return await Promise.all(
    shards.map(
      async s => await bot.client.shard?.broadcastEval(code, { shard: s }).catch((r: string) => bot.logger.error(r))
    )
  );
}
