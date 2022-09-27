import "./App.scss";
import NavigationButton from "./components/NavigationButton";
import React from "react";
import Constructor from "./components/Construcor";
import CreateTemplate from "./components/CreateTemplate";

function App() {
  const activeConstructor = false;
  const activeTemplate = true;

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
