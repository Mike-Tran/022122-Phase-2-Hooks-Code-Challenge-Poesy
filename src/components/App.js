import React, { useState, useEffect } from 'react';
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const poemAPI = "http://localhost:8004/poems";
// id, title, content, author

function App() {
  const [poems, setPoems] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [favoriteVisible, setFavoriteVisible] = useState(true);

  useEffect(() => {
    fetch(poemAPI)
      .then(res => res.json())
      .then(data => setPoems(data))
  }, []);

  function addPoem(newPoem) {
    setPoems([...poems, newPoem]);
  }

  function removePoem(poemToRemove) {
    setPoems(poems.filter(poem => poem.id !== poemToRemove.id))
  }

  function addToFavorites(favoritePoem, isFav) {
    setPoems(poems.map(poem => {
      return poem.id === favoritePoem.id ? {...favoritePoem, isFavorite: isFav} : poem
      }  
    ))
  }


  const poemsToDisplay = poems.filter((poem) => favoriteVisible || poem.isFavorite);

  return (
    <div className="app">
      <div className="sidebar">
        <button 
          onClick={() => setFormVisible(!formVisible)} >
          Show/hide new poem form
        </button>
        {formVisible ? <NewPoemForm addPoem={addPoem} /> : null}

      <button onClick={() => setFavoriteVisible(!favoriteVisible)} >
        Show/hide Favorite Poems
      </button>

      </div>

      {(poemsToDisplay.length === 0 && !favoriteVisible) ?
        <h1>You have no favorites added</h1> :
        <PoemsContainer 
        poems={poemsToDisplay} 
        removePoem={removePoem} 
        addToFavorites={addToFavorites}
        />
      }


    </div>
  );
}

export default App;
