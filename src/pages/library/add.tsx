import React, { ReactElement } from "react";
import Layout from "../../components/common/layouts/Layout";
import LibForm from "../../components/library/add/form/LibForm";

const Add = () => {
  return (
    <div>
      <h2>Добавление нового материала</h2>
      <LibForm />
    </div>
  );
};

Add.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Add;
