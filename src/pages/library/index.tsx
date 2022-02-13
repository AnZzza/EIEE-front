import React, { ReactElement } from "react";
import LibLayout from "@components/common/layouts/LibLayout";
import LibFindForm from "../../components/library/input/LibFindForm";
import LibTitle from "../../components/library/title/LibTitle";
import LibFieldSet from "@components/common/nav/lib/LibFieldSet";

const Library = () => {
  return (
    <div>
      <LibTitle text="Библиотека военно-учебного центра миэт" />
      <LibFindForm />
      <LibFieldSet />
      <br />
      <br />
      <p>
        Здесь хранятся все необходимые учебные материалы военной кафедры МИЭТ
      </p>
      <p>Грызите гранит науки военной подготовки</p>
    </div>
  );
};

export default Library;

Library.getLayout = function getLayout(page: ReactElement) {
  return <LibLayout>{page}</LibLayout>;
};
