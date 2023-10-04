import React, { useContext } from "react";
import { ecomContext } from "./Home";

function Products() {
  const { allProducts } = useContext(ecomContext);
  return (
    <div className="products-wrapper">
      {allProducts.map((product, index) => {
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
