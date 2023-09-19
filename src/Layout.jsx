import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-100 ">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <ul className="flex justify-end">
            <li className="mr-4">
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/counter" className="text-white">Counter</Link>
            </li>
            <li>
              <Link to="/question" className="text-white">Question</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;
