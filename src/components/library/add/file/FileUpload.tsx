import React from "react";
import styles from "./FileUpload.module.css";

interface FileUploadProps {}

const FileUpload: React.FC<FileUploadProps> = ({}) => {
  return (
    <fieldset className={styles.files}>
      <legend>Загрузите файл</legend>
      <label>
        <input
          type="file"
          // name={`products[${productId}].files`}
          // onChange={handleChange}
          className={styles.input}
          multiple
          required
        />
      </label>
    </fieldset>
  );
};

export default FileUpload;
