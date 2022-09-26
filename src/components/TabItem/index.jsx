import React from "react";
import styles from "./styles.module.scss";

const TabItem = ({ version, id, isActiveTab, setActiveTabId }) => {
  return (
    <div>
      <p
        className={`${styles.tab_title} ${isActiveTab ? styles.active : ""}`}
        onClick={() => {
          setActiveTabId(id);
        }}
      >
        Версия {version}
      </p>
    </div>
  );
};

export default TabItem;
