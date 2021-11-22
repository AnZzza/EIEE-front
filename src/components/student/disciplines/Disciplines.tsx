import React from "react";
import styles from "./Disciplines.module.scss";

const Disciplines = () => {
  return (
    <div className={styles.main}>
      <p>Дисциплины</p>
      <ul className={styles.list}>
        <li>Рлс</li>
        <li>Компьютерный практикум Рлс</li>
        <li>Теория Рлс</li>
      </ul>
    </div>
  );
};

export default Disciplines;
