import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🍽 Featured Recipes</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <p className="text-gray-700 dark:text-white">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
