import React, { useState } from "react";
import styles from "./styles.module.scss";

const NavigationButton = () => {
  const [isOpenMenu, setOpenMenu] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.hidden_menu}  ${
          isOpenMenu === true && styles.slide_up
        } ${isOpenMenu === false && styles.slide_down}`}
      >
        <button type={"button"} className={styles.navigation_item}>
          <span className={styles.icon_left}>
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="#151515"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 4.95911e-05L19.5 5.50005V16.5L10 22L0.5 16.5V5.50005L10 4.95911e-05ZM10 2.31105L2.5 6.65305V15.347L10 19.689L17.5 15.347V6.65305L10 2.31105ZM10 15C8.93913 15 7.92172 14.5786 7.17157 13.8285C6.42143 13.0783 6 12.0609 6 11C6 9.93918 6.42143 8.92177 7.17157 8.17162C7.92172 7.42148 8.93913 7.00005 10 7.00005C11.0609 7.00005 12.0783 7.42148 12.8284 8.17162C13.5786 8.92177 14 9.93918 14 11C14 12.0609 13.5786 13.0783 12.8284 13.8285C12.0783 14.5786 11.0609 15 10 15ZM10 13C10.5304 13 11.0391 12.7893 11.4142 12.4143C11.7893 12.0392 12 11.5305 12 11C12 10.4696 11.7893 9.96091 11.4142 9.58584C11.0391 9.21076 10.5304 9.00005 10 9.00005C9.46957 9.00005 8.96086 9.21076 8.58579 9.58584C8.21071 9.96091 8 10.4696 8 11C8 11.5305 8.21071 12.0392 8.58579 12.4143C8.96086 12.7893 9.46957 13 10 13Z" />
            </svg>
          </span>
          <span className={styles.text_button}>Настройка</span>
        </button>
        <button type={"button"} className={styles.navigation_item}>
          <span className={styles.icon_left}>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="#151515"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 16H5V18H17V1.99995H5V3.99995H3V0.999954C3 0.734738 3.10536 0.480384 3.29289 0.292847C3.48043 0.105311 3.73478 -4.57764e-05 4 -4.57764e-05H18C18.2652 -4.57764e-05 18.5196 0.105311 18.7071 0.292847C18.8946 0.480384 19 0.734738 19 0.999954V19C19 19.2652 18.8946 19.5195 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5195 3 19.2652 3 19V16ZM5 8.99996H12V11H5V14L0 9.99996L5 5.99996V8.99996Z" />
            </svg>
          </span>
          <span className={styles.text_button}>Выход</span>
        </button>
      </div>
      <button
        type={"button"}
        className={styles.navigation_item}
        onClick={() => setOpenMenu((prevState) => !prevState)}
      >
        <span className={styles.icon_left}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#151515"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.44466 7.55551C8.44466 5.59183 10.0365 3.99995 12.0002 3.99995C13.9639 3.99995 15.5558 5.59183 15.5558 7.55551C15.5558 9.51919 13.9639 11.1111 12.0002 11.1111C10.0365 11.1111 8.44466 9.51919 8.44466 7.55551ZM4 17.7778C4 15.8978 6.66093 14.6814 9.16493 14.1268C9.81382 14.9899 10.8373 15.5556 12 15.5556C13.1627 15.5556 14.1862 14.9899 14.8351 14.1268C17.3391 14.6814 20 15.8978 20 17.7778V20H4V17.7778Z"
            />
          </svg>
        </span>
        <span className={styles.text_button}>Смирнов В.</span>
        <span className={styles.icon_chevron}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#151515"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.56953 9.34961L5.76953 11.322L11.446 16.5566L12.0003 17.0999L12.5546 16.5566L18.2311 11.322L16.2926 9.34961L12.0003 13.5496L7.56953 9.34961Z"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default NavigationButton;
