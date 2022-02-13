import React, { useContext } from "react";
import NavBar from "../nav/side/NavBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>ЭИОС</h2>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
