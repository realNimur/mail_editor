import React, { useState } from "react";
import HeaderButtons from "../HeaderButtons";

const Header = ({ sendData }) => {
  const [versionShow, setVersionShow] = useState(false);
  const [activeVersion, setActiveVersion] = useState(7654321);

  return (
    <div>
      <HeaderButtons handleSave={sendData} />
      <div className="right-header__info">
        <p className="title">Бланк банковской гарантии №1234567</p>
        <div className="recipient">
          <p className="recipient__name">ООО “Получатель гарантии”</p>
          <p className="recipient__value">5 000 000 руб</p>
          <p className="recipient__date">01.02.2022</p>
        </div>
        <div className="categories">
          <div className="category">ФЗ 44</div>
          <div className="category">участие</div>
        </div>

        <div className={"version"}>
          <span
            onClick={() => setVersionShow(true)}
            className="chevron"
            style={{
              transform: `rotate(${versionShow ? "180deg" : 0})`,
            }}
          />
          <p onClick={() => setVersionShow(true)}>Версии {activeVersion}</p>
          {versionShow && (
            <div className="hidden" onClick={() => setVersionShow(false)}>
              <p onClick={() => setActiveVersion(7654320)}>Версии 7654320</p>
              <p onClick={() => setActiveVersion(7654322)}>Версии 7654322</p>
              <p onClick={() => setActiveVersion(7654323)}>Версии 7654323</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
