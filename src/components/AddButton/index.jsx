import React from "react";
import styles from "./styles.module.scss";

const PlusComponent = () => {
  return (
    <svg
      className={styles.plus}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19"
        stroke="#7D70DD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="#7D70DD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const AddButton = ({ handleClick, text = null }) => {
  if (text) {
    return (
      <div className={styles.wrapper}>
        <button
          className={styles.button}
          type={"button"}
          style={{
            borderRadius: "20px",
            padding: "12px 32px",
          }}
          onClick={handleClick}
        >
          <PlusComponent />
          <p className={styles.text}>{text}</p>
        </button>
      </div>
    );
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        padding: "32px 0",
      }}
    >
      <button
        className={styles.button}
        type={"button"}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
        onClick={handleClick}
      >
        <PlusComponent />
      </button>
    </div>
  );
};

export default AddButton;
