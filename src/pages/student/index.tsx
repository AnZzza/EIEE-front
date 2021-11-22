import Layout from "@components/common/layouts/Layout";
import React, { ReactElement } from "react";
import Disciplines from "../../components/student/disciplines/Disciplines";
import styles from "../../styles/Student.module.css";

const index = () => {
  return (
    <div className={styles.page}>
      <Disciplines />
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
