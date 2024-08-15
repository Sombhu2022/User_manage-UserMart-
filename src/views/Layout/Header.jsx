import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { BiLogInCircle, BiHomeCircle, BiSolidDashboard } from "react-icons/bi";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAuthActions from "../../controllers/userControler";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { logoutUser } = useAuthActions();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const res = logoutUser(user.name);
    console.log(res);
  };

  return (
    <header className="relative p-4 w-full flex justify-between items-center bg-white border border-gray-200 shadow-md">
      <h2 className="text-3xl font-bold text-gray-800">UserMart</h2>
      <nav className="flex items-center gap-4">
        <button
          onClick={isAuthenticated ? handleLogout : () => navigate("/login")}
          className={`flex items-center font-semibold gap-2 px-4 py-2 rounded-full text-white transition-colors ${
            isAuthenticated
              ? "bg-indigo-500 hover:bg-indigo-600"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
        >
          {isAuthenticated ? "Logout" : "Login"} <BiLogInCircle />
        </button>

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
            to="/"
            onClick={toggleMenu}
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-500 transition-colors"
          >
            <BiHomeCircle className="text-xl" /> Home
          </NavLink>
          {isAuthenticated && (
            <NavLink
              to="/dashboard"
              onClick={toggleMenu}
              className=" flex items-center gap-2 text-gray-700 hover:text-indigo-500 transition-colors"
            >
              <BiSolidDashboard className="text-xl" /> Dashboard
            </NavLink>
          )}
         
        </div>
      )}
    </header>
  );
};

export default Header;
