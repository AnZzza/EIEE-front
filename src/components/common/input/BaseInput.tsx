import React, { CSSProperties, FC, HTMLAttributes } from "react";
import styles from "./BaseInput.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value?: string;
}

const BaseInput: FC<InputProps> = ({ type, ...rest }) => {
  return <input {...rest} type={type} className={styles.baseInput} required />;
};

export default BaseInput;
