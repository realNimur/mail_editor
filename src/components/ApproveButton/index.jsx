import React from "react";
import styles from "./styles.module.scss";

const ApproveButton = () => {
  return (
    <button type={"button"} className={styles.approve_button}>
      <span>
        <svg
          className={styles.chevron}
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.12489 8.28474L14.2493 0L15.5 1.2743L6.12489 10.8333L0.5 5.09809L1.74978 3.82379L6.12489 8.28474Z"
            fill="#6FCF97"
          />
        </svg>
      </span>
      <span className={styles.text_button}>Согласовать</span>
    </button>
  );
};

export default ApproveButton;
