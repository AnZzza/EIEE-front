import React, { ReactElement } from "react";
import LibLayout from "@components/common/layouts/LibLayout";

import {
  AIR_DEFENCE,
  BUILDING,
  COMMON_TACTIC,
  DEVICE_AND_USAGE,
  PEACETIME,
  PREPARATION,
} from "@utils/routes";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getTitle } from "@utils/helpers";
import LibFieldSet from "@components/common/nav/lib/LibFieldSet";
import LibFindForm from "@components/library/input/LibFindForm";
import LibTitle from "../../../components/library/title/LibTitle";

export async function getStaticPaths() {
  return {
    paths: [
      PEACETIME,
      PREPARATION,
      BUILDING,
      DEVICE_AND_USAGE,
      AIR_DEFENCE,
      COMMON_TACTIC,
    ],
    fallback: false,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log(context.params);
  const theme = context.params?.theme;
  const title: string = getTitle(theme);

  return {
    props: {
      title,
    },
  };
};

LibPage.getLayout = function getLayout(page: ReactElement) {
  return <LibLayout>{page}</LibLayout>;
};

function LibPage({ title }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <LibTitle text={title} />
      <LibFindForm />
      <LibFieldSet />
    </div>
  );
}

export default LibPage;
