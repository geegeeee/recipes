import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipe";
import RecipeDetail from "./pages/RecipeDetail";
import Portfolio from "./pages/Portfolio";
import Cursor from "./components/Cursor";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
        <Cursor/>
      </div>
    </Router>
  );
}

export default App;
