import { Field } from "formik";
import React from "react";
import styles from "./TypeFieldset.module.css";

interface TypeFieldsetProps {}

const TypeFieldset: React.FC<TypeFieldsetProps> = ({}) => {
  return (
    <fieldset>
      <legend>Выберите тип материала: </legend>
      <label>
        <Field type="radio" name="type" value="video" />
        Видео
      </label>
      <label>
        <Field type="radio" name="type" value="doc" />
        Документ
      </label>
      <label>
        <Field type="radio" name="type" value="trainer" />
        Тренажёр
      </label>
    </fieldset>
  );
};

export default TypeFieldset;
