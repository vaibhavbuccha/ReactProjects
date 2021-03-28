import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App(){
  const APP_ID = "e27033e9";
  const APP_KEY = "afa00c7021b947bbe37650ad4bc27d10";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('indian');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App" >
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" value={search} type="text" onChange={updateSearch} />
        <button  className="search-button" >
          Search
        </button> 
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
          />
        ) )}
      </div>
    </div>
  )
}


export default App;