import React, { useContext } from "react";
import { ThemeData } from "../../App";

const Products = () => {
  const [themeData] = useContext(ThemeData);
  const { background } = themeData;
  return <div className={`${background} min-h-screen p-4 pt-16`}>Products</div>;
};

export default Products;
