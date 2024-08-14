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
    <header className="p-3 w-full flex justify-between lg:pl-20 lg:pr-20 md:pl-3 md:pr-3  bg-[#1e6ee51d] border  border-[#8090c038] ">
    <h2 className="text-3xl font-bold text-gray-700 text-center ">
        UserMart
    </h2>
      <nav className="flex items-center justify-center gap-2">
        <NavLink
          to={"/doctors"}
          className={
            " flex justify-center items-center gap-2 h-[40px] border rounded-[50px] p-3 pt-1 pb-1 border-[#1c1d1f36] text-lg text-white bg-slate-400"
          }
        >
          Login <BiLogInCircle />
        </NavLink>

        {menuOpen ? (
          <MdOutlineClose
            className="size-7 cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <CgDetailsMore
            className="size-7 cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </nav>
      {menuOpen && (
        <div className="absolute top-16 right-3 w-40  shadow-lg flex gap-2 flex-col">
          <NavLink to="/link1" className="navlink">
            Link 1
          </NavLink>
          <NavLink to="/link2" className="navlink ">
            Link 2
          </NavLink>
          <NavLink to="/link3" className="navlink">
            Link 3
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
