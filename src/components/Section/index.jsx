import React from "react";
import SectionItem from "../SectionItem";

const Section = ({
  role,
  sectionList,
  setSectionList,
  upInOrder,
  downInOrder,
  handleDelete,
  handleReturn,
  addToTemplate,
  isCreateTemplatePage,
}) => {
  const setInfoText = (text, currentElementId) => {
    const newState = [...sectionList];
    newState[currentElementId].text = text;
    setSectionList(newState);
  };

  const setApprove = (currentElementId) => {
    const newState = [...sectionList];
    newState[currentElementId].isApprove = true;
    setSectionList(newState);
  };

  return (
    <div style={{ paddingRight: "8px" }}>
      {sectionList?.length > 0 && (
        <>
          {sectionList.map((item, index) => {
            const currentElementId = sectionList.findIndex(
              (section) => section.id === item.id
            );

            return (
              <SectionItem
                id={item.id}
                key={item.id}
                type={item.type}
                role={role}
                order={index}
                isCreateTemplatePage={isCreateTemplatePage}
                handleReturn={handleReturn}
                status={item.status}
                file={item.file}
                hasDelete={item.hasDelete}
                infoText={item.text}
                isApprove={item.isApprove}
                handleDelete={handleDelete}
                setInfoText={(text) => setInfoText(text, currentElementId)}
                setApprove={() => setApprove(currentElementId)}
                upInOrder={upInOrder}
                downInOrder={downInOrder}
                addToTemplate={addToTemplate}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Section;
