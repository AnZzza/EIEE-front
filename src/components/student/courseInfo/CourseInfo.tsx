import React from "react";
import styles from "./CourseInfo.module.scss";

const CourseInfo = () => {
  return (
    <div className={styles.box}>
      <b>Направление: </b>
      <br />
      Радиотехнические войска
      <br />
      <b>Профиль: </b>
      П-35
      <br />
      <b>Семестр: </b>
      <select name="Semester" id="12">
        <option value="0">2019-2020, 1 семестр</option>
        <option value="1">2019-2020, 2 семестр</option>
        <option value="2">2020-2021, 1 семестр</option>
        <option value="3">2020-2021, 2 семестр</option>
        <option value="4">2021-2022, 1 семестр</option>
        <option value="5">2021-2022, 2 семестр</option>
        <option value="6">2022-2023, 1 семестр</option>
        <option value="7">2022-2023, 2 семестр</option>
      </select>
    </div>
  );
};

export default CourseInfo;
