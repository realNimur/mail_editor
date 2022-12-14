import React, { useContext, useRef } from "react";
import AddButton from "../AddButton";
import styles from "./styles.module.scss";
import { Context } from "../../App";

const Footer = ({ setSectionList, openModal }) => {
  const fileInput = useRef(null);
  const { role } = useContext(Context);
  const isManager = role === "manager";

  const addTextSection = () => {
    setSectionList((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        isApprove: false,
      },
    ]);
  };

  const addDocumentSection = (file) => {
    setSectionList((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        type: "document",
        isApprove: false,
        file,
      },
    ]);
  };

  const addTriggerDocument = () => {
    fileInput.current.value = null;
    fileInput.current.click();
  };

  return (
    <div className={styles.footer}>
      <input
        style={{
          width: 0,
          height: 0,
        }}
        ref={fileInput}
        onChange={(e) => {
          if (e.target?.files[0]) {
            addDocumentSection(e.target.files[0]);
          }
        }}
        type={"file"}
        name="foo"
        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"
      />
      {isManager && (
        <AddButton text={"Из библиотеки"} handleClick={openModal} />
      )}
      <AddButton text={"Текст"} handleClick={addTextSection} />
      <AddButton text={"Документ"} handleClick={addTriggerDocument} />
    </div>
  );
};

export default Footer;
