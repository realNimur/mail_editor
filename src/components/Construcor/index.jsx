import React, { useState } from "react";
import Header from "../Header";
import Tabs from "../Tabs";
import Section from "../Section";
import {
  DownElementOrderInArray,
  UpElementOrderInArray,
} from "../../helpers/helpers";

const Constructor = () => {
  const [sectionList, setSectionList] = useState([
    {
      id: 1,
      type: "text",
      text: '1. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии с Федеральным законом от 05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" (далее - Федеральный закон) победителем определения поставщика (подрядчика, исполнителя) или иным участником закупки, с которым по результатам определения поставщика (подрядчика, исполнителя) заключается контракт).',
      isApprove: false,
    },
    {
      id: 2,
      type: "text",
      text: '2. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии с Федеральным законом от 05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" (далее - Федеральный закон) победителем определения поставщика (подрядчика, исполнителя) или иным участником закупки, с которым по результатам определения поставщика (подрядчика, исполнителя) заключается контракт).',
      isApprove: true,
    },
    {
      id: 3,
      type: "text",
      text: '3. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии с Федеральным законом от 05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" (далее - Федеральный закон) победителем определения поставщика (подрядчика, исполнителя) или иным участником закупки, с которым по результатам определения поставщика (подрядчика, исполнителя) заключается контракт).',
      isApprove: false,
    },
  ]);

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
    <div className="app__right">
      <div className="right-header">
        <Header sendData={sendData} />
        <Tabs />
      </div>
      <Section
        sectionList={sectionList}
        setSectionList={setSectionList}
        upInOrder={upInOrder}
        downInOrder={downInOrder}
      />
    </div>
  );
};

export default Constructor;
