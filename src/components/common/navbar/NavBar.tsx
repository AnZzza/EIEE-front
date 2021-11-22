import React, { FormEventHandler, useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { DISCIPLINE, MATERIALS, SOURCES, LOGIN } from "../../../utils/routes";
import AuthService from "../../../services/AuthService";
import { observer } from "mobx-react-lite";
import Store from "../../../store/store";
import { Context } from "../../../index";

const NavBar = () => {
  const { store } = useContext(Context);
  const handleClick = async (e) => {
    e.preventDefault;
    const response = store.logout();
  };

  return (
    <ul className={styles.main}>
      <li>
        <NavLink to={DISCIPLINE}>обучение</NavLink>
      </li>
      <li>
        <NavLink to={MATERIALS}>материалы</NavLink>
      </li>
      <li>
        <NavLink to={SOURCES}>ссылки</NavLink>
      </li>
      <li onClick={handleClick}>
        <NavLink to={LOGIN}>выход</NavLink>
      </li>
    </ul>
  );
};

export default observer(NavBar);
