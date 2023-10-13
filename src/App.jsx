import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import AddCategory from "./admin/AddCategory.jsx";
import AddProduct from "./admin/AddProduct.jsx";
export const ecomContext = createContext();

function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  function filterByCategory(e, name) {
    e.preventDefault();
    setIsFilter(name);
  }

  useEffect(() => {
    axios.get("http://localhost:8080/category").then((response) => {
      setAllCategories(response.data);
    });
    axios.get("http://localhost:8080/products").then((response) => {
      setAllProducts(response.data);
    });
  }, []);
  return (
    <ecomContext.Provider
      value={{
        allCategories,
        setAllCategories,
        allProducts,
        filterByCategory,
        isFilter,
        setIsFilter,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/product/add" element={<AddProduct />}></Route>
          <Route path="/admin/category/add" element={<AddCategory />}></Route>
        </Routes>
      </BrowserRouter>
    </ecomContext.Provider>
  );
}
export default App;
