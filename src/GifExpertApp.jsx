import { useState } from "react";

import AddCategoryInput from "./components/AddCategoryInput";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo de la App */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategoryInput
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de items/tarjetas/gifs */}
        {categories &&
          categories.map((category) => (
            <GifGrid 
              key={category} 
              category={category} 
            />
          ))}
      {/* Gif Items */}
    </>
  );
};

export default GifExpertApp;
