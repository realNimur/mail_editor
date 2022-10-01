import React from "react";
import styles from "./styles.module.scss";
import CustomButton from "../CustomButton";
import image from "../../images/image.png";

const Login = ({ setLoginManager, setLoginClient }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <p className={styles.title}>Конструктор документов</p>
        <div className={styles.form}>
          <div className={styles.form__item}>
            <p className={styles.name_input}>Почта</p>
            <input
              placeholder={"Введите электронную почту"}
              type="email"
              className={styles.input}
            />
          </div>
          <div className={styles.form__item}>
            <p className={styles.name_input}>Пароль</p>
            <input
              placeholder={"Введите пароль"}
              type="text"
              className={styles.input}
            />
          </div>
          <CustomButton
            text={"Войти"}
            style={{ width: "100%", marginBottom: "16px" }}
          />
          <CustomButton
            text={"Войти как менеджер"}
            style={{ width: "100%", marginBottom: "16px" }}
            onClick={setLoginManager}
          />
          <CustomButton
            text={"Войти как клиент"}
            style={{ width: "100%" }}
            onClick={setLoginClient}
          />
        </div>
      </div>
      <div
        className={styles.container__right}
        style={{ backgroundImage: `url('${image}')` }}
      />
    </div>
  );
};

export default Login;
