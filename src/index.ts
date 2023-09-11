export { default as colorToInt } from "./utils/colorToInt";
export { default as ms } from "ms";
export { default as msToDate } from "./utils/msToDate";
export { default as msToDuration } from "./utils/msToDuration";
export { default as shardsEval } from "./utils/shardsEval";
export { default as snowflakeToDate } from "./utils/snowflakeToDate";
export { default as stringToMs } from "./utils/stringToMs";
export { default as getColor } from "./utils/getColor";
export { default as getReadyShards } from "./utils/getReadyShards";
export { default as uppercaseFirst } from "./utils/uppercaseFirst";
export { default as randomInt } from "./utils/randomInt";
export { default as UtilArray } from "./utils/UtilArray";

export default {
  colorToInt: require("./utils/colorToInt").default,
  ms: require("ms"),
  msToDate: require("./utils/msToDate").default,
  msToDuration: require("./utils/msToDuration").default,
  shardsEval: require("./utils/shardsEval").default,
  snowflakeToDate: require("./utils/snowflakeToDate").default,
  stringToMs: require("./utils/stringToMs").default,
  getColor: require("./utils/getColor").default,
  getReadyShards: require("./utils/getReadyShards").default,
  uppercaseFirst: require("./utils/uppercaseFirst").default,
  randomInt: require("./utils/randomInt").default,
  UtilArray: require("./utils/UtilArray").default,
};
