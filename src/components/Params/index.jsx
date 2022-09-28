import React, { useState } from "react";
import styles from "./styles.module.scss";
import AddButton from "../AddButton";

const SmallCross = () => {
  return (
    <svg
      className={styles.cross_svg}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 3.5L3.5 10.5"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 3.5L10.5 10.5"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Params = ({ title }) => {
  const [paramsList, setParamsList] = useState([
    {
      id: 1,
      name: "44 ФЗ",
    },
    {
      id: 2,
      name: "участие",
    },
  ]);

  const deleteItem = (id) => {
    setParamsList(paramsList.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.params}>
      {title ? title : null}
      <div className={styles.params__items}>
        <AddButton />
        {paramsList.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.params__item}
              onClick={() => deleteItem(item.id)}
            >
              <p className={styles.name}>{item.name}</p>
              <div className={styles.cross}>
                <SmallCross />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Params;
