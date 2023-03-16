import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-around items-center bg-white border-b border-gray-200 h-20 w-full z-20 sticky top-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-900 flex" : "text-black flex"
        }
      >
        <h1>Shoes For Everyone</h1>
      </NavLink>
      <nav className="flex gap-3">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-red-900" : "text-black"
          }
        >
          Produtos
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-900" : "text-black"
          }
        >
          login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-red-900" : "text-black"
          }
        >
          register
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
