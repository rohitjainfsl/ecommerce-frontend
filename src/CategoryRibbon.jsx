import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "./Home";

function CategoryRibbon() {
  const { allCategories } = useContext(ecomContext);
  return <div className="categories-wrapper">
    <ul>
        {
            allCategories.map((category, index) => {
                return <li key={index}><Link to="#">{category.name}</Link></li>
            })
        }
    </ul>
  </div>
}

export default CategoryRibbon;
