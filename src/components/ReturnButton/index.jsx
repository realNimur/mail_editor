import React from "react";
import styles from "./styles.module.scss";

const ReturnButton = (props) => {
  return (
    <button type={"button"} className={styles.button} {...props}>
      <span>Вернуть</span>
    </button>
  );
};

export default ReturnButton;
