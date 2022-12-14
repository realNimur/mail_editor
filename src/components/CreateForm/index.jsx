import React from "react";
import HeaderButtons from "../HeaderButtons";
import Section from "../Section";
import {
  DownElementOrderInArray,
  UpElementOrderInArray,
} from "../../helpers/helpers";
import EmptyBlock from "../EmptyBlock";
import Params from "../Params";
import styles from "./styles.module.scss";
import Footer from "../Footer";

const CreateForm = ({ openModal, templateList, setTemplateList }) => {
  const sendData = () => {
    console.log(JSON.stringify(templateList));
    alert(JSON.stringify(templateList));
  };

  const upInOrder = (id) => {
    setTemplateList(UpElementOrderInArray(id, templateList));
  };

  const downInOrder = (id) => {
    setTemplateList(DownElementOrderInArray(id, templateList));
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
        {templateList.length === 0 && (
          <EmptyBlock setSectionList={setTemplateList} />
        )}
        <Section
          sectionList={templateList}
          setSectionList={setTemplateList}
          downInOrder={downInOrder}
          upInOrder={upInOrder}
        />
        <Footer openModal={openModal} setSectionList={setTemplateList} />
      </div>
    </>
  );
};

export default CreateForm;
