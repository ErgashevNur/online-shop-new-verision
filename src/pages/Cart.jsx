import React, { useState, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Loading from "../components/Loading";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(
          data.products.map((product) => ({
            ...product,
            originalPrice:
              product.price * (1 + product.discountPercentage / 100),
            quantity: 1,
          }))
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleRemoveItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, increment) => {
    setProducts((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + increment),
            }
          : item
      )
    );
  };

  const totalPrice = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalOriginalPrice = products.reduce(
    (acc, item) => acc + item.originalPrice * item.quantity,
    0
  );

  if (loading) {
    Loading;
  }

  return (
    <div className="p-6 ml-32">
      <h1 className="text-2xl font-bold mb-4">
        Savatingiz, {products.length} mahsulot
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white shadow rounded-lg mb-4"
            >
              <input type="checkbox" className="checkbox" defaultChecked />
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  Sotuvchi: Noma'lum sotuvchi
                </p>
                <p className="text-gray-500 line-through text-sm">
                  $ {item.originalPrice.toLocaleString()}
                </p>
                <p className="text-green-600 font-bold">
                  $ {item.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="btn btn-outline btn-sm"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="btn btn-outline btn-sm"
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="btn">
                <FaRegTimesCircle className="btn-md" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-bold text-lg mb-4">Buyurtmangiz</h2>
          <div className="mb-2">
            <span className="text-sm text-gray-500">
              Mahsulotlar ({products.length}):
            </span>
            <span className="float-right text-sm">
              $ {totalOriginalPrice.toLocaleString()}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-sm text-gray-500">Jami:</span>
            <span className="float-right text-lg font-bold text-green-600">
              ${totalPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Tejovingiz: ${(totalOriginalPrice - totalPrice).toLocaleString()}{" "}
          </p>
          <button className="btn btn-primary w-full">
            Rasmiylashtirishga o'tish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
