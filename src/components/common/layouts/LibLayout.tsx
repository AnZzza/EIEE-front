import React, { ReactNode } from "react";
import Header from "../header/Header";
import styles from "./LibLayout.module.css";
import { useRouter } from "next/router";
import { LIBRARY } from "@utils/routes";
import SideNav from "../nav/side/SideNav";
import LibFieldSet from "../nav/lib/LibFieldSet";

const LibLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <SideNav />
          {children}
        </div>
      </main>
    </>
  );
};

export default LibLayout;
