import React, { useContext } from "react";
import NavBar from "../navbar/NavBar";
import styles from "./Header.module.scss";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const Header = () => {
  const { store } = useContext(Context);

  if (!store.isAuth) {
    return (
      <header className={styles.main}>
        <h2>ЭИОС</h2>
        {/* <NavBar /> */}
      </header>
    );
  }

  return (
    <header className={styles.main}>
      <h2>ЭИОС</h2>
      <NavBar />
    </header>
  );
};

export default observer(Header);
