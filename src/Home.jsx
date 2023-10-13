/* eslint-disable react-refresh/only-export-components */
import React from "react";
import CategoryRibbon from "./CategoryRibbon";
import Header from "./Header";
import Products from "./Products";

function Home() {
  return (
    <>
      <Header />
      <CategoryRibbon />
      <Products />
    </>
  );
}

export default Home;
