import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="relative group cursor-pointer bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105" onClick={() => navigate(`/recipe/${recipe.id}`)}>
      <img src={recipe.image} alt={recipe.title} 
        className="w-full h-40 sm:h-48 md:h-52 lg:h-55 object-cover group-hover:opacity-75 transition duration-300 dark:text-gray-300" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{recipe.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 ">{recipe.description}</p>
        <button
          onClick={() => navigate(`/recipe/${recipe.id}`)}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
