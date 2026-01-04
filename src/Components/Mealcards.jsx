import React, { useState } from "react";
import Mealcards from "./Mealcards";

const Mainpage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchMeal = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const result = await res.json();
    setData(result.meals);
  };

  return (
    <div>
      <h1>Food Recipe App</h1>

      <input
        type="text"
        placeholder="Search meal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchMeal}>Search</button>

      <Mealcards details={data} />
    </div>
  );
};

export default Mainpage;
