import React, { useState } from "react";
import TabItem from "../TabItem";
import styles from "./styles.module.scss";

const Tabs = () => {
  const [activeTabId, setActiveTabId] = useState(1);
  const versionsList = [
    { id: 1, version: 7654321 },
    { id: 2, version: 7654322 },
    { id: 3, version: 7654323 },
  ];

  return (
    <div className={styles.tabs}>
      {versionsList.map((item) => {
        const isActiveTab = item.id === activeTabId;
        return (
          <TabItem
            key={item.id}
            version={item.version}
            id={item.id}
            isActiveTab={isActiveTab}
            setActiveTabId={setActiveTabId}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
