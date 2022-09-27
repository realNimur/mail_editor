import React, { useState } from "react";
import HeaderButtons from "../HeaderButtons";
import AddButton from "../AddButton";
import Section from "../Section";
import {
  DownElementOrderInArray,
  UpElementOrderInArray,
} from "../../helpers/helpers";
import EmptyBlock from "../EmptyBlock";

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
      <div className="" style={{ paddingRight: "8px" }}>
        <p>Создание шаблона печатной формы</p>
        <div className="">
          <p>Название</p>
          <input type="text" placeholder={"Напишите название"} />
        </div>
        <div className="">
          <p>Параметры шаблона</p>
          <div className="">
            <AddButton />
          </div>
        </div>
        <div className="">Содержание</div>
        {sectionList.length === 0 && <EmptyBlock />}
        <Section
          sectionList={sectionList}
          setSectionList={setSectionList}
          downInOrder={downInOrder}
          upInOrder={upInOrder}
        />
      </div>
    </>
  );
};

export default CreateTemplate;
