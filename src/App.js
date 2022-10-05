import "./App.scss";
import NavigationButton from "./components/NavigationButton";
import React, { useState } from "react";
import Constructor from "./components/Construcor";
import CreateForm from "./components/CreateForm";
import Library from "./components/Library";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import CreateTemplate from "./components/CreateTemplate";

export const Context = React.createContext(null);

function App() {
  const [isLogin, setLogin] = useState(false);
  const [role, setRole] = useState(null);
  const [isOpenLibrary, setOpenLibrary] = useState(false);
  const [sectionList, setSectionList] = useState([
    {
      id: 1,
      type: "text",
      status: "edit",
      text: '1. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии с Федеральным законом от 05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" (далее - Федеральный закон) победителем определения поставщика (подрядчика, исполнителя) или иным участником закупки, с которым по результатам определения поставщика (подрядчика, исполнителя) заключается контракт).',
      isApprove: false,
      hasDelete: false,
    },
    {
      id: 2,
      type: "text",
      status: "approve",
      text: '2. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии с Федеральным законом от 05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" (далее - Федеральный закон) победителем определения поставщика (подрядчика, исполнителя) или иным участником закупки, с которым по результатам определения поставщика (подрядчика, исполнителя) заключается контракт).',
      isApprove: true,
      hasDelete: false,
    },
    {
      id: 3,
      type: "text",
      status: "approve",
      text: '3. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии с Федеральным законом от 05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" (далее - Федеральный закон) победителем определения поставщика (подрядчика, исполнителя) или иным участником закупки, с которым по результатам определения поставщика (подрядчика, исполнителя) заключается контракт).',
      isApprove: false,
      hasDelete: false,
    },
    {
      id: 4,
      type: "text",
      status: "approve",
      text: '3. Настоящая независимая гарантия обеспечивает исполнение принципалом его обязательств по заключению контракта с бенефициаром (в случае признания принципала в соответствии с Федеральным законом от 05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" (далее - Федеральный закон) победителем определения поставщика (подрядчика, исполнителя) или иным участником закупки, с которым по результатам определения поставщика (подрядчика, исполнителя) заключается контракт).',
      isApprove: false,
      hasDelete: true,
    },
  ]);
  const [templateList, setTemplateList] = useState([]);
  const [templateFormList, setTemplateFormList] = useState([]);

  const setLoginManager = () => {
    setRole("manager");
    setLogin(true);
  };

  const setLoginClient = () => {
    setRole("client");
    setLogin(true);
  };

  const openModal = () => setOpenLibrary(true);

  const addFromLibrary = (data) => {
    const newData = (prevState) => [
      ...prevState,
      {
        ...data,
        id: prevState.length + 1,
        isApprove: false,
        hasDelete: false,
      },
    ];
    if (window.location.pathname === "/") {
      setSectionList(newData);
    } else if (window.location.pathname === "/form/create") {
      setTemplateFormList(newData);
    }
    setOpenLibrary(false);
  };

  const addToTemplate = (item) => setTemplateList([item]);

  return (
    <Context.Provider value={{ role }}>
      {isLogin ? (
        <div
          className="app"
          style={{
            overflow: isOpenLibrary ? "hidden" : "auto",
          }}
        >
          <RouterProvider
            router={createBrowserRouter(
              [
                {
                  path: "/",
                  element: (
                    <Constructor
                      role={role}
                      openModal={openModal}
                      setSectionList={setSectionList}
                      sectionList={sectionList}
                      addToTemplate={addToTemplate}
                    />
                  ),
                },
                {
                  path: "/template/create",
                  element: (
                    <CreateTemplate
                      templateList={templateList}
                      setTemplateList={setTemplateList}
                    />
                  ),
                },
                {
                  path: "/form/create",
                  element: (
                    <CreateForm
                      templateList={templateFormList}
                      setTemplateList={setTemplateFormList}
                      role={role}
                      openModal={openModal}
                    />
                  ),
                },
                {
                  path: "*",
                  element: <Navigate to="/" replace />,
                },
              ],
              { basename: "/mail_editor" }
            )}
          />
          <NavigationButton />
          <Library
            addFromLibrary={addFromLibrary}
            isOpenLibrary={isOpenLibrary}
            setOpenLibrary={setOpenLibrary}
          />
        </div>
      ) : (
        <RouterProvider
          router={createBrowserRouter(
            [
              {
                path: "/",
                element: (
                  <Login
                    setLoginManager={setLoginManager}
                    setLoginClient={setLoginClient}
                  />
                ),
              },
              {
                path: "*",
                element: <Navigate to="/" replace />,
              },
            ],
            { basename: "/mail_editor" }
          )}
        />
      )}
    </Context.Provider>
  );
}

export default App;
