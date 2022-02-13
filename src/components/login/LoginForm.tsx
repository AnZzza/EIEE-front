import React, { FormEventHandler, useContext, useState } from "react";
import styles from "./LoginForm.module.scss";
import BaseInput from "../common/input/BaseInput";
import BaseButton from "../common/button/BaseButton";
import ErrorDiv from "../common/error/ErrorDiv";
import { useAppDispatch } from "hooks/redux";
import { login } from "store/reducers/ActionCreators";
import { useAppSelector } from "../../hooks/redux";
import Router from "next/router";
import router from "next/router";
import { STUDENT } from "../../utils/routes";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, user } = useAppSelector(
    (state) => state.authReducer
  );

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // dispatch(login(credentials));
    router.push(STUDENT);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h2>Вход в эиос</h2>
        <p>Электронно информационная образовательная система</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <ErrorDiv mes={error} />}
        {isLoading && <p>ЗАГРУЗКА</p>}
        <BaseInput
          type="text"
          name="email"
          placeholder="логин"
          value={credentials.email}
          onChange={handleChange}
        />
        <BaseInput
          type="password"
          name="password"
          placeholder="пароль"
          value={credentials.password}
          onChange={handleChange}
        />
        <BaseButton text="Подтвердить" />
      </form>
    </div>
  );
};

export default LoginForm;
