import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "./App";

function CategoryRibbon() {
  const { allCategories, filterByCategory } = useContext(ecomContext);
  return (
    <div className="categories-wrapper">
      <ul>
        {allCategories.map((category, index) => {
          return (
            <li key={index}>
              <Link to="#" onClick={(e) => filterByCategory(e, category.name)}>
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryRibbon;
