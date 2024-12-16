import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { useSignout } from "../hooks/useSignout";

function Navbar() {
  const { color } = useContext(GlobalContext);
  const { userSignout } = useSignout();

  return (
    <header className="bg-base-300" style={{ backgroundColor: color }}>
      <div
        className="align-elements px-10 bg-base-300 flex justify-between items-center"
        style={{ backgroundColor: color }}
      >
        <div className="navbar " style={{ backgroundColor: color }}>
          <div className="navbar-start">
            <Link to="/" className="btn btn-active hidden md:flex ml-4">
              Uchiha's
            </Link>

            <div className="dropdown md:hidden">
              <div tabIndex={0} role="button" className="btn m-1">
                Uchiha's
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>
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
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    <FaClipboardList /> Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-center">
            <ul className="menu menu-horizontal  rounded-box hidden md:flex ">
              <li>
                <Link to="/" className="tooltip tooltip-bottom" data-tip="Home">
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
              </li>

              <li>
                <Link
                  to="/info"
                  className="tooltip tooltip-bottom"
                  data-tip="Info"
                >
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="tooltip tooltip-bottom "
                  data-tip="Cart"
                >
                  <FaClipboardList className="h-5 w-5 " />
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end ">
            <Link to="/product/:id" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Link>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZswR4Z3d9TNoX_8_zi4_gVNeFhttcmZQ3Q&s"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">sa</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">Your Products</span>
                  <span className="text-info">
                    {/* Subtotal: ${totalPrice.toLocaleString()} */}
                  </span>
                  <div className="card-actions">
                    <Link to="/Cart" className="btn btn-primary btn-block">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZswR4Z3d9TNoX_8_zi4_gVNeFhttcmZQ3Q&s"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <span onClick={userSignout}>Logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
