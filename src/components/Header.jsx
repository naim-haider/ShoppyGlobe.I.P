import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="flex flex-wrap">
        <section className="relative mx-auto w-full">
          <nav className="flex justify-between bg-[#262220] text-white w-[100vw]">
            <div className="px-5 xl:px-12 py-6 flex w-full justify-between items-center">
              <Link
                className="text-3xl font-bold font-heading text-[#f7f1f0]"
                to="/"
              >
                ShoppyGlobe
              </Link>
              <img
                className="hidden md:block absolute -top-2 xl:left-[45%] left-[40%]"
                src="/images/logoMain.png"
                alt="mainlogo"
              />
              <div className=" flex items-center">
                {/* Nav Links */}
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                  <li>
                    <Link
                      className="hover:text-gray-200 text-[#f7f1f0] flex"
                      to="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 mr-1 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 26 26"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
                        />
                      </svg>
                      Home
                    </Link>
                  </li>
                </ul>

                {/* Header Icons */}
                <div className="hidden md:flex items-center space-x-5">
                  <Link
                    className="flex items-center text-[#f7f1f0] hover:text-gray-200"
                    to="/cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 26 26"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {cartItems.length > 0 ? (
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                    ) : null}
                    <p className="font-semibold font-heading space-x-12">
                      Cart <sup className="">{cartItems.length}</sup>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Responsive navbar */}
            <Link
              className="navbar-burger self-center text-[#f7f1f0] mr-6 md:hidden"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
                />
              </svg>
            </Link>
            <Link
              className="md:hidden flex mr-12 text-[#f7f1f0]  items-center"
              to="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItems.length > 0 ? (
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              ) : null}
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Header;
