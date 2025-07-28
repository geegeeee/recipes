import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";
import { Helmet } from "react-helmet";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 md:p-6">
      <Helmet>
        <title>Gigi Nwe Recipes</title>
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">🍽 Featured Recipes</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="w-full py-3 px-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none shadow-sm focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
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
