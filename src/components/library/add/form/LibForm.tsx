import React from "react";
import styles from "./LibForm.module.css";
import FileUpload from "../file/FileUpload";
import { Field, Form, Formik } from "formik";
import TypeFieldset from "../type/TypeFieldset";
import PpoFieldset from "../ppo/PpoFieldset";

const LibForm = () => {
  return (
    <form action="">
      <Formik
        initialValues={{
          type: "",
          ppo: "",
          file: null,
        }}
        onSubmit={async (values) => {
          let formData = new FormData();
          console.log("values is\n", values);
          for (const key in values) {
            // console.log(key, "-----", values[key]);
            // formData.append(key, JSON.stringify(values[key]));
            // console.log(formData.get(key));
          }
          alert(JSON.stringify(formData));
        }}
      >
        {({ values }) => (
          <Form className={styles.form}>
            <TypeFieldset />
            <PpoFieldset />

            <FileUpload />
            <button type="submit">Submit</button>
            <p>{JSON.stringify(values)}</p>
          </Form>
        )}
      </Formik>
    </form>
  );
};

export default LibForm;
