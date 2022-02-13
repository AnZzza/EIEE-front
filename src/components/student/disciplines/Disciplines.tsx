import React, { FC } from "react";
import styles from "./Disciplines.module.scss";

interface userDisciplines {
  dList: any[];
}

const Disciplines: FC<userDisciplines> = ({ dList }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          <th>Дисциплины</th>
          <th>
            <span>балл</span>
          </th>
        </tr>
      </thead>
      <tbody className={styles.list}>
        {dList.map((d) => (
          <tr key={d.name}>
            <td>{d.name}</td>
            <td>
              <span>из 100</span>
            </td>
            <td>
              <span>{d.scores}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Disciplines;
