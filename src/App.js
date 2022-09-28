import "./App.scss";
import NavigationButton from "./components/NavigationButton";
import React, { useEffect, useState } from "react";
import Constructor from "./components/Construcor";
import CreateTemplate from "./components/CreateTemplate";

function App() {
  const [activeConstructor, setActiveConstructor] = useState(true);
  const [activeTemplate, setActiveTemplate] = useState(false);

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    let window = params.get("window");
    if (window === "create") {
      setActiveConstructor(false);
      return setActiveTemplate(true);
    }
    setActiveTemplate(false);
    setActiveConstructor(true);
  }, []);

  return (
    <>
      <div className="app">
        <NavigationButton />
        {activeConstructor && <Constructor />}
        {activeTemplate && <CreateTemplate />}
      </div>
    </>
  );
}

export default App;
