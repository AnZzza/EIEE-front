import React from "react";
import styles from "./Disciplines.module.scss";

const Disciplines = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p>Дисциплины</p>
        <p>балл</p>
      </div>
      <ul className={styles.list}>
        <li>
          <p>Рлс</p>
          <div>43</div>
        </li>
        <li>
          <p>Компьютерный практикум Рлс</p>
          <div>92</div>
        </li>
        <li>
          <p>Теория Рлс</p>
          <div>78</div>
        </li>
      </ul>
    </div>
  );
};

export default Disciplines;
