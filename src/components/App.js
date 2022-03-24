import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <button>Show/hide new poem form</button>
        {true ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;
