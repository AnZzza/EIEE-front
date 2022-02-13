import React, { FormEventHandler, SyntheticEvent, useContext } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { LIBRARY, SOURCES, LOGIN, STUDENT } from "../../../../utils/routes";

const NavBar = () => {
  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault;
    console.log("It is too early to logout!");
  };

  return (
    <ul className={styles.list}>
      <li>
        <Link href={STUDENT}>обучение</Link>
      </li>
      <li>
        <Link href={LIBRARY}>библиотека</Link>
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
