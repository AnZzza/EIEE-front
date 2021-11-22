import CourseInfo from "@components/student/courseInfo/CourseInfo";
import Disciplines from "@components/student/disciplines/Disciplines";
import Layout from "@components/common/layouts/Layout";
import React, { ReactElement } from "react";
import styles from "../../styles/Student.module.css";

const index = () => {
  return (
    <div>
      <Disciplines />
      <CourseInfo />
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
