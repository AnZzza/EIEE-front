import Link from "next/link";
import React from "react";
import styles from "./LibFieldSet.module.scss";

const LibFieldSet = () => {
  return (
    <fieldset className={styles.fieldset}>
      <label>
        <input type="radio" name="type" />
        Видео
      </label>
      <label>
        <input type="radio" name="type" />
        Файлы
      </label>
      <label>
        <input type="radio" name="type" />
        Тренажеры
      </label>
    </fieldset>
  );
};

export default LibFieldSet;
