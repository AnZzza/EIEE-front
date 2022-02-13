import React, { FC } from "react";
import styles from "./LibTitle.module.css";

interface LibTitleProps {
  text: string;
}

const LibTitle: FC<LibTitleProps> = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default LibTitle;
