import React from "react";
import styles from "./PpoFieldset.module.css";
import { Field } from "formik";

interface PpoFieldsetProps {}

const PpoFieldset: React.FC<PpoFieldsetProps> = ({}) => {
  return (
    <fieldset>
      <legend>Выберите ППО:</legend>
      <label>
        <Field name="ppo" type="radio" value="special" />
        Военно-специальные дисциплины
      </label>
      <label>
        <Field name="ppo" type="radio" value="tactic" />
        Тактические и тактико-специальные дисциплины
      </label>
      <label>
        <Field name="ppo" type="radio" value="common" />
        Общевоенные дисциплины
      </label>
    </fieldset>
  );
};

export default PpoFieldset;
