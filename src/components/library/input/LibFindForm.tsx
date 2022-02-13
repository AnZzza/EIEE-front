import React from "react";
import styles from "./LibFindForm.module.css";

const LibFindForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" className={styles.input} />
        <button className={styles.button}>Найти</button>
      </form>
    </div>
  );
};

export default LibFindForm;
