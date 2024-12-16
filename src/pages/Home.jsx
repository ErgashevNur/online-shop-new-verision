// import React, { useEffect, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

import ProductsContainer from "../components/ProductsContainer";
import { axiosInstance } from "../utils/axiosInstance";

// loader
export const loader = async () => {
  const req = await axiosInstance.get("/products");
  const products = req.data.products;
  return { products };
};

// const Loading = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
//       <span className="loading loading-ring loading-lg"></span>
//     </div>
//   );
// };
const Home = () => {
  return <ProductsContainer />;
};

export default Home;
