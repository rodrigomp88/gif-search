import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>Gif Search</h2>
      <p>Escriba para visualizar lo que desee ver</p>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
      <div class="footer">
        Made with ❤, by <a href="https://github.com/rodrigomp88">Rodrigo</a>
      </div>
    </>
  );
};
