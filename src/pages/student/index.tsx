import CourseInfo from "@components/student/courseInfo/CourseInfo";
import Disciplines from "@components/student/disciplines/Disciplines";
import React from "react";

const index = () => {
  return (
    <div>
      <Disciplines />
      <CourseInfo />
    </div>
  );
};

export default index;
