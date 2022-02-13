import React, { ReactElement } from "react";
import Layout from "@components/common/layouts/Layout";

const Sources = () => {
  return (
    <div>
      <a href="http://vk.miet.ru/">Сайт военной кафедры миэт</a>
      <br />
      <a href="https://mil.ru/">
        Сайт министерства обороны Российской Федерации
      </a>
    </div>
  );
};

export default Sources;

Sources.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
