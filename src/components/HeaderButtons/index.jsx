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
      {isClient && <CustomButton text={"Отправить в банк"} />}
      {isManager ? (
        isCreateTemplatePage ? (
          <CustomButton text={"Предпросмотр"} />
        ) : (
          <CustomButton text={"Отправить клиенту"} />
        )
      ) : null}
      <CustomButton text={"Сохранить"} onClick={handleSave} />
      <DownloadButton />
    </div>
  );
};

export default HeaderButtons;
