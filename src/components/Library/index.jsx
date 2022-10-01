import React, { useState } from "react";
import styles from "./styles.module.scss";
import CustomButton from "../CustomButton";

const Library = ({ isOpenLibrary, setOpenLibrary, addFromLibrary }) => {
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      text: "Условия",
    },
    {
      id: 2,
      text: "Возврат",
    },
    {
      id: 3,
      text: "ФЗ",
    },
  ]);
  const [contentList, setContentList] = useState([
    {
      id: "1",
      text: `1. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии ...`,
      type: "text",
      typeName: "Текстовый блок",
    },
    {
      id: "2",
      text: `2. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии ...`,
      type: "text",
      typeName: "Текстовый блок",
    },
    {
      id: "3",
      text: `3. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии ...`,
      type: "text",
      typeName: "Текстовый блок",
    },
    {
      id: "4",
      text: `4. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии ...`,
      type: "text",
      typeName: "Текстовый блок",
    },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);

  const renderContentItem = (item) => {
    return (
      <div
        className={styles.content__item}
        key={item.id}
        onClick={() => {
          addFromLibrary({
            type: item.type,
            status: "",
            text: item.text,
          });
        }}
      >
        <div className={styles.left}>
          <p className={styles.text}>{item.text}</p>
          <p className={styles.type}>{item.typeName}</p>
        </div>
        <CustomButton text={"Вставить"} />
      </div>
    );
  };

  const renderCategoryItem = (item) => {
    const isActive = activeTabId === item.id;
    return (
      <p
        key={item.id}
        onClick={() => setActiveTabId(item.id)}
        className={`${styles.category__item} ${isActive ? styles.active : ""}`}
      >
        {item.text}
      </p>
    );
  };

  return (
    <>
      {isOpenLibrary && (
        <div className={styles.modal}>
          <div className={styles.library}>
            <div
              className={styles.library__close}
              onClick={() => setOpenLibrary(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#151515"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#151515"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.library__category}>
              {categoryList.map(renderCategoryItem)}
            </div>
            <div className={styles.library__content}>
              {contentList.map(renderContentItem)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Library;
