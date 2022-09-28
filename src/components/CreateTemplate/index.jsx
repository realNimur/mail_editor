import React, { useState } from "react";
import HeaderButtons from "../HeaderButtons";
import Section from "../Section";
import {
  DownElementOrderInArray,
  UpElementOrderInArray,
} from "../../helpers/helpers";
import EmptyBlock from "../EmptyBlock";
import Params from "../Params";
import styles from "./styles.module.scss";

const CreateTemplate = () => {
  const [sectionList, setSectionList] = useState([]);

  const sendData = () => {
    console.log(JSON.stringify(sectionList));
    alert(JSON.stringify(sectionList));
  };

  const upInOrder = (id) => {
    setSectionList(UpElementOrderInArray(id, sectionList));
  };

  const downInOrder = (id) => {
    setSectionList(DownElementOrderInArray(id, sectionList));
  };

  return (
    <>
      <HeaderButtons handleSave={sendData} />
      <div className={styles.wrapper}>
        <p className={styles.title}>Создание шаблона печатной формы</p>
        <div className={styles.template}>
          <p className={styles.template__name}>Название</p>
          <input
            type="text"
            placeholder={"Напишите название"}
            className={styles.template__input}
          />
        </div>
        <Params
          title={<p className={styles.params__title}>Параметры шаблона</p>}
        />
        <div className={styles.content__title}>Содержание</div>
        {sectionList.length === 0 && <EmptyBlock />}
        <Section
          sectionList={sectionList}
          setSectionList={setSectionList}
          downInOrder={downInOrder}
          upInOrder={upInOrder}
          withParams={true}
        />
      </div>
    </>
  );
};

export default CreateTemplate;
