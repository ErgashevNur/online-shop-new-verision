import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { toast } from "react-toastify";

function ProductsContainer() {
  const { dispatch, selectedProducts } = useContext(GlobalContext);
  const { products } = useLoaderData();

  const buyProduct = (e, prod) => {
    e.preventDefault();

    const product = selectedProducts.find((product) => prod.id == product.id);
    if (product) {
      toast.warn("Already, added !");
      return;
    }

    dispatch({ type: "ADD_PRODUCT", payload: prod });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mx-8">
      {products.map((prod) => {
        const monthlyPayment =
          (prod.price * (1 + prod.discountPercentage / 100)) / 12;

        return (
          <div
            key={prod.id}
            className="card bg-white shadow-lg rounded-lg p-4 max-w-sm"
          >
            <Link to={`/singleProduct/${prod.id}`}>
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-full h-64 object-contain"
              />
              <h3 className="text-lg font-semibold mt-2">
                {prod.title} - {prod.description.slice(0, 25)}...{" "}
              </h3>

              <div className="flex gap-2 items-center mt-2">
                <span className="text-sm text-yellow-500">
                  {"★".repeat(Math.round(prod.rating))}
                </span>
                <span className="text-sm text-gray-500">
                  ({prod.rating.toFixed(1)})
                </span>
              </div>

              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-500 line-through text-sm">
                  ${(prod.price * 1.2).toFixed(2)}
                </span>
                <span className="text-xl font-bold text-green-600">
                  ${prod.price}
                </span>
              </div>
              <div className="text-sm text-yellow-500 mt-2">
                <div className="badge badge-warning gap-2 px-3 py-3">
                  ${monthlyPayment.toFixed(2)} /oyiga
                </div>
              </div>
            </Link>

            <button
              onClick={(e) => buyProduct(e, prod)}
              className="mt-4 bg-blue-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-blue-600"
            >
              <FaShoppingCart className="text-xl" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsContainer;
