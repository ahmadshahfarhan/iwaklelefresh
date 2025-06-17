import React from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollOrRedirect = (id) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      localStorage.setItem("scrollTarget", id);
      navigate("/");
    }
  };

  return (
    <nav>
      <div className="container flex justify-center w-full mx-auto lg:max-w-[1000px] absolute right-0 left-0 top-6 z-30">
        <div className="flex items-center justify-between bg-[#ebebeb] rounded-[200px] px-8 py-2 w-full">
          <img
            className="w-[50px] bg-[#ffbd59] rounded-full p-2 cursor-pointer"
            src={Logo}
            alt="iwaklelefresh"
            onClick={() => handleScrollOrRedirect("home")}
          />
          <ul className="flex items-center gap-2 md:gap-4 font-semibold text-sm md:text-[16px]">
            <li
              onClick={() => handleScrollOrRedirect("home")}
              className="cursor-pointer hover:text-yellow-500 transition"
            >
              Home
            </li>
            <li
              onClick={() => handleScrollOrRedirect("testimoni")}
              className="cursor-pointer hover:text-yellow-500 transition"
            >
              Testimoni
            </li>
            <li
              onClick={() => handleScrollOrRedirect("produk")}
              className="cursor-pointer hover:text-yellow-500 transition"
            >
              Product
            </li>
          </ul>
          {/* <div className="relative">
            <div className="bg-[#7ed957] rounded-full w-[16px] h-[16px] z-10 left-4 top-[-6px] absolute">
              <h1 className="font-semibold text-white text-center text-[10px] m-0 p-0">
                6
              </h1>
            </div>
            <RiShoppingBasketFill className="w-7 h-7 md:w-8 md:h-8 text-red-500 cursor-pointer" />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
