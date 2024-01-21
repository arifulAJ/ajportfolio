// components/ProductFilter.js

import { useState } from "react";

const ProductFilter = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div className="flex items-center align-middle justify-between space-x-4">
      <div className=" flex   cursor-pointer space-x-2">
        <p
          className={`p-2 text-xl  relative ${
            selectedCategory === "" && "text-orange-500 font-bold"
          }`}
          onClick={() => handleCategoryClick("")}
        >
          All
          {selectedCategory === "" && (
            <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 "></span>
          )}
        </p>
        <div className="flex flex-col  justify-between md:flex-row">
          {categories.map((category) => (
            <p
              key={category}
              className={`p-2  text-xl    relative ${
                selectedCategory === category && "text-orange-500 font-bold"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
              {selectedCategory === category && (
                <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-orange-500"></span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
