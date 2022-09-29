import React from "react";
import SectionItem from "../SectionItem";
import Footer from "../Footer";

const Section = ({ sectionList, setSectionList, upInOrder, downInOrder }) => {
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
        <div>
          {sectionList.map((item) => {
            const currentElementId = sectionList.findIndex(
              (section) => section.id === item.id
            );

            return (
              <>
                <SectionItem
                  id={item.id}
                  key={item.id}
                  type={item.type}
                  file={item.file}
                  infoText={item.text}
                  isApprove={item.isApprove}
                  setInfoText={(text) => setInfoText(text, currentElementId)}
                  setApprove={() => setApprove(currentElementId)}
                  upInOrder={upInOrder}
                  downInOrder={downInOrder}
                />
              </>
            );
          })}
        </div>
      )}
      <Footer setSectionList={setSectionList} />
    </div>
  );
};

export default Section;
