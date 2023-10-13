import React, { useContext, useEffect, useState } from "react";
import { ecomContext } from "./App";

function Products() {
  const { allProducts, isFilter } = useContext(ecomContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const temp = allProducts;
    setFilteredProducts(
      temp.filter((product) => {
        return product.category === isFilter;
      })
    );
  }, [isFilter]);

  return (
    <div className="products-wrapper">
      {
        filteredProducts.length > 0 
        ? filteredProducts.map((product, index) => {
          return (
            <div className="product" key={index}>
              <img
                src={`http://localhost:8080/uploads/products/${product.photo.filename}`}
                alt="Product Photo"
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          );
        })

        : allProducts.map((product, index) => {
        return (
          <div className="product" key={index}>
            <img
              src={`http://localhost:8080/uploads/products/${product.photo.filename}`}
              alt="Product Photo"
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
