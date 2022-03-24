import React, { useState, useEffect } from 'react';
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const poemAPI = "http://localhost:8004/poems";
// id, title, content, author

function App() {
  const [poems, setPoems] = useState([]);
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    fetch(poemAPI)
      .then(res => res.json())
      .then(data => setPoems(data))
  }, []);

  function addPoem(newPoem) {
    setPoems([...poems, newPoem]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button 
          onClick={() => setFormVisible(!formVisible)} >
          Show/hide new poem form
        </button>
        {formVisible ? <NewPoemForm addPoem={addPoem} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
