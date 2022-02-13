import React from "react";
import Header from "../header/Header";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import { LIBRARY } from "@utils/routes";

const Layout = ({ children }: any) => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.pathname.includes(LIBRARY));
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
