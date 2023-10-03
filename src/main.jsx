import React from "react";
import ReactDOM from "react-dom/client";
import AddProduct from './admin/AddProduct.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/admin/add" element={<AddProduct />}></Route>
  </Routes>
</BrowserRouter>

);
