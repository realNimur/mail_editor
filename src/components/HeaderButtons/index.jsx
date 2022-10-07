import React, { useContext } from "react";
import CustomButton from "../CustomButton";
import DownloadButton from "../DownloadButton";
import { Context } from "../../App";

const HeaderButtons = ({
  handleSave = () => {},
  isCreateTemplatePage = false,
}) => {
  const { role } = useContext(Context);
  const isClient = role === "client";
  const isManager = role === "manager";

  return (
    <div className="right-header__buttons">
      {!isCreateTemplatePage && (
        <>
          {isClient && <CustomButton text={"Отправить в банк"} />}
          {isManager && <CustomButton text={"Отправить клиенту"} />}
        </>
      )}
      <CustomButton text={"Сохранить"} onClick={handleSave} />
      {!isCreateTemplatePage && <DownloadButton />}
    </div>
  );
};

export default HeaderButtons;
