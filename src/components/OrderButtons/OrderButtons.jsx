import React from "react";
import styles from "./styles.module.scss";

const OrderButtons = ({ id, upInOrder, downInOrder, ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <button
        type={"button"}
        className={styles.button}
        onClick={() => downInOrder(id)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19V5"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12L12 5L19 12"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type={"button"}
        className={styles.button}
        onClick={() => upInOrder(id)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5L12 19"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 12L12 19L5 12"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default OrderButtons;
