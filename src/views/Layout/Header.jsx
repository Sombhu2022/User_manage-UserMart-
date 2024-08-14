import { Link, NavLink } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative p-4 w-full flex justify-between items-center bg-white border border-gray-200 shadow-md">
      <h2 className="text-3xl font-bold text-gray-800">
        UserMart
      </h2>
      <nav className="flex items-center gap-4">
        <NavLink
          to={"/login"}
          className="flex items-center font-semibold gap-2 px-4 py-2 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          Login <BiLogInCircle />
        </NavLink>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          {menuOpen ? (
            <MdOutlineClose className="text-2xl text-gray-700" />
          ) : (
            <CgDetailsMore className="text-2xl text-gray-700" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute top-16 right-3 bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col gap-2 p-4 w-48">
          <NavLink
            to="/link1"
            className="text-gray-700 hover:text-indigo-500 transition-colors"
          >
            Link 1
          </NavLink>
          <NavLink
            to="/link2"
            className="text-gray-700 hover:text-indigo-500 transition-colors"
          >
            Link 2
          </NavLink>
          <NavLink
            to="/link3"
            className="text-gray-700 hover:text-indigo-500 transition-colors"
          >
            Link 3
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
