import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes";
import {useNavigate } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  const navigate = useNavigate();

  if (!recipe) return <p className="text-gray-700 dark:text-white">Recipe not found</p>;

  return (
    <div className="container mx-auto p-6">
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      onClick={() => navigate("/recipe")}>Back</button>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg shadow-lg  dark:text-white mt-4" />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-4">{recipe.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2 font-body">{recipe.description}</p>

      {/* Ingredients Section */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">🛒 Ingredients</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Steps Section */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">👨‍🍳 Steps</h2>
      <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

    </div>
  );
};

export default RecipeDetail;
