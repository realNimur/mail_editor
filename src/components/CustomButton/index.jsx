import React from "react";
import styles from "./styles.module.scss";

const CustomButton = ({ text, ...props }) => {
  return (
    <button type={"button"} className={styles.custom_button} {...props}>
      {text}
    </button>
  );
};

export default CustomButton;
