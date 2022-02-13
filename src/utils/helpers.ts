import router from "next/router";
import Router from "next/router";
import { useRouter } from "next/router";
import {
  AIR_DEFENCE,
  BUILDING,
  COMMON_TACTIC,
  DEVICE_AND_USAGE,
  LIBRARY,
  PEACETIME,
  PREPARATION,
  Theme,
} from "./routes";

export const getTitle = (theme: any): string => {
  switch (theme) {
    case Theme.PEACETIME:
      return "Управление подразделениями в мирное время";
    case Theme.PREPARATION:
      return "Общевоенная подготовка";
    case Theme.BUILDING:
      return "Основы построения систем вооружения";
    case Theme.DEVICE_AND_USAGE:
      return "Устройство и эксплуатация";
    case Theme.AIR_DEFENCE:
      return "ПВО";
    case Theme.COMMON:
      return "Общая тактика";
    default:
      return "вернитесь в библиотеку, пожалуйста!";
  }
};
