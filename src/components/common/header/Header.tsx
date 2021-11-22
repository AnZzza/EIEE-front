import React, { useContext } from "react";
import NavBar from "../navbar/NavBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>ЭИОС</h2>
      <NavBar />
    </header>
  );
};

export default Header;
