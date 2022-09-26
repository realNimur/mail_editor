import React from "react";
import SectionItem from "../SectionItem";
import AddButton from "../AddButton";

const Section = ({ sectionList, setSectionList, upInOrder, downInOrder }) => {
  return (
    <div>
      <div>
        {sectionList.map((item) => {
          const currentElementId = sectionList.findIndex(
            (section) => section.id === item.id
          );

          const setInfoText = (text) => {
            const newState = [...sectionList];
            newState[currentElementId].text = text;
            setSectionList(newState);
          };

          const setApprove = () => {
            const newState = [...sectionList];
            newState[currentElementId].isApprove = true;
            setSectionList(newState);
          };

          return (
            <SectionItem
              id={item.id}
              key={item.id}
              infoText={item.text}
              isApprove={item.isApprove}
              setInfoText={setInfoText}
              setApprove={setApprove}
              upInOrder={upInOrder}
              downInOrder={downInOrder}
            />
          );
        })}
      </div>
      <AddButton
        handleClick={() => {
          setSectionList((prevState) => [
            ...prevState,
            {
              id: prevState.length + 1,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              isApprove: false,
            },
          ]);
        }}
      />
    </div>
  );
};

export default Section;
