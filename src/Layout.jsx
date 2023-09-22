import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-gray-100 text-gray-900">
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-orange-500 text-2xl font-bold">Mon Site</Link>
          <div className="flex md:hidden ml-auto">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 4.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707a1 1 0 0 0-1.414 1.414L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm1 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H5z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <ul className="md:flex md:items-center">
              <li className="mr-4">
                <Link to="/" className="text-orange-500 hover:text-gray-400">Accueil</Link>
              </li>
              <li className="mr-4">
                <Link to="/shop" className="text-orange-500 hover:text-gray-400">Boutique</Link>
              </li>
              <li className="mr-4">
                <Link to="/contact" className="text-orange-500 hover:text-gray-400">Contact</Link>
              </li>
              <li className="mr-4">
                <Link to="/counter" className="text-orange-500 hover:text-gray-400">Counter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;