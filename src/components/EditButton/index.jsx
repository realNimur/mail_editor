import React from "react";
import styles from "./styles.module.scss";

const EditButton = (props) => {
  return (
    <button type={"button"} className={styles.edit_button} {...props}>
      <svg
        className={styles.pencil}
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.345 12.3333L11.7967 3.88163L10.6183 2.7033L2.16667 11.155V12.3333H3.345ZM4.03583 14H0.5V10.4641L10.0292 0.934968C10.1854 0.778742 10.3974 0.690979 10.6183 0.690979C10.8393 0.690979 11.0512 0.778742 11.2075 0.934968L13.565 3.29247C13.7212 3.44874 13.809 3.66066 13.809 3.88163C13.809 4.1026 13.7212 4.31453 13.565 4.4708L4.03583 14ZM0.5 15.6666H15.5V17.3333H0.5V15.6666Z" />
      </svg>
      <span>Редактировать</span>
    </button>
  );
};

export default EditButton;
