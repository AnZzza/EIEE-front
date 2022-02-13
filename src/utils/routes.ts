export const LOGIN = "/";
export const STUDENT = "/student";
export const TEACHER = "/teacher";
export const DISCIPLINES = "/disciplines";
export const SOURCES = "/sources";

export const LIBRARY = "/library";

export const COMMON = "common";
export const SPECIFIC = "specific";
export const TACTIC = "library";

export enum Ppo {
  COMMON = "common",
  SPECIFIC = "specific",
  TACTIC = "tactic",
}

export enum Theme {
  PEACETIME = "peacetime",
  PREPARATION = "preparation",
  BUILDING = "building",
  DEVICE_AND_USAGE = "dev-and-usage",
  AIR_DEFENCE = "air-def",
  COMMON = "common",
}

export const PEACETIME = `/library/${Ppo.COMMON}/${Theme.PEACETIME}`;
export const PREPARATION = `/library/${Ppo.COMMON}/${Theme.PREPARATION}`;
export const BUILDING = `/library/${Ppo.SPECIFIC}/${Theme.BUILDING}`;
export const DEVICE_AND_USAGE = `/library/${Ppo.SPECIFIC}/${Theme.DEVICE_AND_USAGE}`;
export const AIR_DEFENCE = `/library/${Ppo.TACTIC}/${Theme.AIR_DEFENCE}`;
export const COMMON_TACTIC = `/library/${Ppo.TACTIC}/${Theme.COMMON}`;
