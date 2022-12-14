import React from "react";
import Header from "../Header";
import Section from "../Section";
import {
  DownElementOrderInArray,
  UpElementOrderInArray,
} from "../../helpers/helpers";
import Footer from "../Footer";

const Constructor = ({
  openModal,
  sectionList,
  setSectionList,
  role,
  addToTemplate,
}) => {
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

  const handleDelete = (id) => {
    setSectionList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleReturn = (id) => {
    const newState = [...sectionList];
    newState[sectionList.findIndex((item) => item.id === id)].hasDelete = false;
    setSectionList(newState);
  };

  return (
    <>
      <div className={"app__left"}>
        <Header role={role} sendData={sendData} />
      </div>
      <div className="app__right">
        <Section
          role={role}
          sectionList={sectionList}
          setSectionList={setSectionList}
          handleDelete={handleDelete}
          handleReturn={handleReturn}
          upInOrder={upInOrder}
          downInOrder={downInOrder}
          addToTemplate={addToTemplate}
        />
        <Footer openModal={openModal} setSectionList={setSectionList} />
      </div>
    </>
  );
};

export default Constructor;
