import React from "react";
import styles from "./SideNav.module.scss";
import NavList from "./navList/NavList";
import { AIR_DEFENCE, BUILDING, PEACETIME, PREPARATION } from "@utils/routes";
import { DEVICE_AND_USAGE, COMMON_TACTIC } from "../../../../utils/routes";

const SideNav = () => {
  return (
    <nav className={styles.nav}>
      {mySpolers.map((spoiler) => (
        <NavList
          title={spoiler.title}
          links={spoiler.links}
          key={spoiler.title}
        />
      ))}
    </nav>
  );
};

export default SideNav;

const mySpolers = [
  {
    title: "ППО Военно-специальные дисциплины",
    links: [
      { name: "Основы построения систем вооружения", href: BUILDING },
      { name: "Устройство и эксплуатация", href: DEVICE_AND_USAGE },
    ],
  },
  {
    title: "ППО Тактические и тактико-специальные дисциплины",
    links: [
      { name: "Общая тактика", href: COMMON_TACTIC },
      { name: "Тактика подразделений войсковой ПВО", href: AIR_DEFENCE },
    ],
  },
  {
    title: "ППО Общевоенные дисциплины",
    links: [
      { name: "Общевоенная подготовка", href: PREPARATION },
      { name: "Управление подразделениями в мирное время", href: PEACETIME },
    ],
  },
];
