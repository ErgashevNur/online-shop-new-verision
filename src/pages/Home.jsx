// import React, { useEffect, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

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
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mx-8">
      {products.map((product) => {
        const monthlyPayment =
          (product.price * (1 + product.discountPercentage / 100)) / 12;

        return (
          <div
            key={product.id}
            className="card bg-white shadow-lg rounded-lg p-4 max-w-sm"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-contain"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>

              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-yellow-500">
                  {"★".repeat(Math.round(product.rating))}
                </span>
                <span className="text-sm text-gray-500">
                  ({product.rating})
                </span>
              </div>

              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-500 line-through text-sm">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="text-xl font-bold text-green-600">
                  ${product.price}
                </span>
              </div>
              <div className="text-sm text-yellow-500 mt-2">
                ${monthlyPayment.toFixed(2)} /oyiga
              </div>
            </Link>

            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-blue-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-blue-600"
            >
              <FaShoppingCart className="text-xl" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
