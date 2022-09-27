import React from "react";
import CustomButton from "../CustomButton";
import DownloadButton from "../DownloadButton";

const HeaderButtons = ({ handleSave = () => {} }) => {
  return (
    <div className="right-header__buttons">
      <CustomButton text={"Предпросмотр"} />
      <CustomButton text={"Сохранить"} onClick={handleSave} />
      <DownloadButton />
    </div>
  );
};

export default HeaderButtons;
