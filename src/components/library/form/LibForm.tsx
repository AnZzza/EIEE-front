import React from "react";
import styles from "./LibForm.module.css";

const LibForm = () => {
  return (
    <form action="">
      <fieldset>
        <legend>Выберите тип материала: </legend>
        <label>
          <input name="type" type="radio" /> Видео
        </label>
        <label>
          <input name="type" type="radio" /> Документ
        </label>
        <label>
          <input name="type" type="radio" /> Тренажёр
        </label>
      </fieldset>

      <fieldset>
        <legend>Выберите ППО:</legend>
        <label>
          <input name="ppo" type="radio" />
          Военно-специальные дисциплины
        </label>
        <label>
          <input name="ppo" type="radio" />
          Тактические и тактико-специальные дисциплины
        </label>
        <label>
          <input name="ppo" type="radio" />
          Общевоенные дисциплины
        </label>
      </fieldset>

      <fieldset className={styles.files}>
        <legend>Upload Your File</legend>
        <label>
          <input
            type="file"
            accept="image/*"
            // name={`products[${productId}].files`}
            // onChange={handleChange}
            className={styles.input}
            multiple
            required
          />
        </label>

        <label>
          <input type="text" /> name
        </label>
      </fieldset>
    </form>
  );
};

export default LibForm;
