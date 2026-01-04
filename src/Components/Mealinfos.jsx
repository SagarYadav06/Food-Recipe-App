import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((res) => res.json())
      .then((data) => setInfo(data.meals[0]));
  }, [id]);

  if (!info) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{info.strMeal}</h1>
      <img src={info.strMealThumb} alt={info.strMeal} width="300" />
      <h3>Instructions</h3>
      <p>{info.strInstructions}</p>
    </div>
  );
};

export default Mealinfo;
