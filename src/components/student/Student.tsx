import React from "react";
import Disciplines from "./disciplines/Disciplines";
import styles from "./Student.module.scss";
import { observer } from "mobx-react-lite";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { DISCIPLINE, MATERIALS, SOURCES } from "../../utils/routes";
import Materials from "../materials/Materials";
import Sources from "../sources/Sources";

const Student = () => {
  const { path } = useRouteMatch();

  return (
    <div className={styles.main}>
      <div>Student</div>
      <Switch>
        <Route path={`${path + DISCIPLINE}`} component={Disciplines} />
        <Route path={`${path + MATERIALS}`} component={Materials} />
        <Route path={`${path + SOURCES}`} component={Sources} />
        <Redirect to={`${path + DISCIPLINE}`} />
      </Switch>
    </div>
  );
};

export default observer(Student);
