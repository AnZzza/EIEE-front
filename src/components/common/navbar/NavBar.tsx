import React, { FormEventHandler, SyntheticEvent, useContext } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { DISCIPLINE, MATERIALS, SOURCES, LOGIN } from "../../../utils/routes";

const NavBar = () => {
  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault;
    console.log("It is too early to logout!");
  };

  return (
    <ul className={styles.main}>
      <li>
        <Link href={DISCIPLINE}>обучение</Link>
      </li>
      <li>
        <Link href={MATERIALS}>материалы</Link>
      </li>
      <li>
        <Link href={SOURCES}>ссылки</Link>
      </li>
      <li onClick={handleClick}>
        <Link href={LOGIN}>выход</Link>
      </li>
    </ul>
  );
};

export default NavBar;
