import CourseInfo from "@components/student/courseInfo/CourseInfo";
import Disciplines from "@components/student/disciplines/Disciplines";
import Layout from "@components/common/layouts/Layout";
import React, { ReactElement } from "react";

const Student = () => {
  return (
    <>
      <Disciplines dList={userDisciplines} />
      <CourseInfo />
    </>
  );
};

export default Student;

Student.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const userDisciplines = [
  {
    name: "РЛС",
    scores: 92,
  },
  {
    name: "Компьютерный практикум РЛС",
    scores: 86,
  },
  {
    name: "Теория РЛС",
    scores: 99,
  },
];

const userDiffs = [
  {
    name: "РЛС",
    diff: [
      {
        name: "Лабораторная работа №1",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №2",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №3",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №4",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №5",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №6",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №7",
        score: 8,
        maxScore: 8,
      },
    ],
  },
  {
    name: "Компьютерный практикум РЛС",
    diff: [
      {
        name: "Лабораторная работа №1",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №2",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №3",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №4",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №5",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №6",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №7",
        score: 8,
        maxScore: 8,
      },
    ],
  },
  {
    name: "Теория РЛС",
    diff: [
      {
        name: "Лабораторная работа №1",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №2",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №3",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №4",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №5",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №6",
        score: 8,
        maxScore: 8,
      },
      {
        name: "Лабораторная работа №7",
        score: 8,
        maxScore: 8,
      },
    ],
  },
];
