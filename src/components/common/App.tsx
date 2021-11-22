import { FC, useContext, useEffect } from "react";

import style from "./App.module.css";
import { observer } from "mobx-react-lite";
import Header from "./header/Header";
import { Context } from "../../index";

const App: FC = ({ children }) => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className={style.app}>
      <Header />
      {children}
    </div>
  );
};

export default observer(App);
