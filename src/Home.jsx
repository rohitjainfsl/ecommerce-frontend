/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import CategoryRibbon from "./CategoryRibbon";
import Header from "./Header";
import Products from "./Products";
export const ecomContext = createContext();

function Home() {
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/category").then((response) => {
      console.log(response.data);
      setAllCategories(response.data);
    });
    axios.get("http://localhost:8080/products").then((response) => {
      console.log(response.data);
      setAllProducts(response.data);
    });
  }, []);

  return (
    <ecomContext.Provider value={{allCategories, allProducts}}>
      <Header />
      <CategoryRibbon />
      <Products />
    </ecomContext.Provider>
  );
}

export default Home;
