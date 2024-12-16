import React, { useState, useEffect } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // maxsulotni soni haqida
  const [amount, setAmount] = useState(1);

  if (loading) {
    // return <Loading />;
  }

  return (
    <div className="p-6 ml-32">
      <h1 className="text-2xl font-bold mb-4">
        Savatingiz, {products.length} mahsulot
      </h1>

      {products.map((item) => (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white shadow rounded-lg mb-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-sm text-gray-500">Sotuvchi: {item.brand}</p>
                <p className="text-gray-500 line-through text-sm">
                  $ {(item.price * 0.2 + item.price).toFixed(2)}
                </p>
                <p className="text-green-600 font-bold">$ {item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => setAmount((prev) => prev - 1)}
                    className="btn btn-outline btn-sm"
                  >
                    <FaMinus />
                  </button>
                  <span id="amounts">{amount}</span>
                  <button
                    onClick={() => setAmount((prev) => prev + 1)}
                    className="btn btn-outline btn-sm"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button onClick={() => removeProd(item.id)} className="btn">
                <FaTrash className="text-xl" />
              </button>
            </div>
          </div>

          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="font-bold text-lg mb-4">Buyurtmangiz</h2>
            <div className="mb-2">
              <span className="text-sm text-gray-500">
                Mahsulotlar ({products.length}):
              </span>
              <span className="float-right text-sm">
                ${" "}
                {((item.price * 0.2 + item.price).toFixed(2) * amount).toFixed(
                  2
                )}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-500">Jami:</span>
              <span className="float-right text-lg font-bold text-green-600">
                ${(item.price * amount).toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Tejovingiz: $
              {(
                (item.price * 0.2 + item.price).toFixed(2) * amount -
                item.price * amount
              ).toFixed(2)}
            </p>
            <button className="btn btn-primary w-full">
              Rasmiylashtirishga o'tish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
