import { Link, useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { IoMdCheckmark } from "react-icons/io";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();

  const monthlyPayment =
    (product.price * (1 + product.discountPercentage / 100)) / 12;

  return (
    <div className="max-w-3xl mx-auto p-4 ">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex justify-center mb-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-64 h-64 object-contain rounded-lg"
            />
          </div>

          <div className="flex justify-between">
            {product.images &&
              product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title}-${index}`}
                  className="w-20 h-20 object-contain rounded-lg cursor-pointer hover:scale-105 transition-transform"
                />
              ))}
          </div>
        </div>

        <div className="flex-1 md:pl-8">
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <br />
          <h3 className="text-xl font-semibold">Brand: {product.brand}</h3>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500 text-xl">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-500 ml-2">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          <h3 className="text-sm mt-4">
            <button className="border rounded bg-green-200 px-2 py-2">
              <IoMdCheckmark />
            </button>{" "}
            There are {product.stock} for sale
          </h3>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>
            <span
              className="
            text-sm text-gray-500 line-through"
            >
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>

          <div className="text-sm text-yellow-500 mt-2">
            <div className="badge badge-warning gap-2 px-3 py-3">
              ${monthlyPayment.toFixed(2)} /oyiga
            </div>
          </div>

          <div className="mt-4 flex">
            <button className="btn btn-primary flex items-center justify-center">
              {/* <FaShoppingCart className="mr-2" /> */}
              Buy Now
            </button>

            <Link to="/" className="btn btn-secondary ml-4">
              Back{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
