import React from "react";
import styles from "./styles.module.scss";

const SaveButton = (props) => {
  return (
    <button type={"button"} className={styles.save_button} {...props}>
      Сохранить
    </button>
  );
};

export default SaveButton;
