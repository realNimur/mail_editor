import "./App.scss";
import NavigationButton from "./components/NavigationButton";
import Tabs from "./components/Tabs";
import Section from "./components/Section";
import Header from "./components/Header";
import { useState } from "react";

function App() {
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
    const from = sectionList.findIndex((item) => item.id === id);
    const to = from + 1;
    if (to === sectionList.length) return;
    const array = [...sectionList];
    const target = array[from];

    for (let k = from; k !== to; k += 1) {
      array[k] = array[k + 1];
    }

    array[to] = target;

    setSectionList(array);
  };

  const downInOrder = (id) => {
    const from = sectionList.findIndex((item) => item.id === id);
    const to = from - 1;
    if (from === 0) return;
    const array = [...sectionList];
    const target = array[from];

    for (let k = from; k !== to; k += -1) {
      array[k] = array[k - 1];
    }

    array[to] = target;

    setSectionList(array);
  };

  return (
    <div className="app">
      <NavigationButton />
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
    </div>
  );
}

export default App;
