import React, { FC } from "react";
import styles from "./ErrorDiv.module.css";

interface IProps {
  mes: string;
}

const ErrorDiv: FC<IProps> = ({ mes }) => {
  return <div className={styles.main}>{mes}</div>;
};

export default ErrorDiv;
