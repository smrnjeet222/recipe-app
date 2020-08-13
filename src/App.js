import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "c594c7f3";
  const APP_KEY = "4fbcce559a9d3505fe77f3332ef64359";
  let arr = ["egg", "banana", "mango", "grapes", "chocolate", "pasta"];
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(
    arr[Math.floor(Math.random() * arr.length)]
  );

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          placeholder="Search here ...."
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <h2 className="query">Search results for {query.toUpperCase()}</h2>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={uuid()}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingrs={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
