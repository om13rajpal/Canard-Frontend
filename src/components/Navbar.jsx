import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  viewingStats,
  setViewingStats,
  cardPage,
  viewingCart,
  setViewingCart,
  currentPath,
}) => {
  const [gif, setGif] = useState("");

  useEffect(() => {
    gsap.to("#nav", {
      y: 70,
      stagger: 0.15,
      duration: 0.45,
      delay: 3,
    });

    setGif(localStorage.getItem("callingCard"));
  }, []);

  const navigate = useNavigate();

  const showStatsIcon =
    currentPath !== "/team" &&
    currentPath !== "/login" &&
    currentPath !== "/shop";

  if (
    ["/login", "/register", "/adminLogin", "/addMembers"].includes(currentPath)
  ) {
    return (
      <div className="absolute -top-12 z-50 right-0 left-0 flex justify-center items-center">
        <Link to={"/"}>
          <img src="/logo.png" id="nav" className="w-[160px] md:w-[180px] h-[20px]" />
        </Link>
      </div>
    );
  } else {
    return (
      <nav className="flex absolute z-30 w-full justify-between items-center 
      px-[10px] sm:px-[20px] md:px-[30px] top-3 translate-y-[-70px]"
      style={{ maxWidth: "100%", margin: "0 auto" }} // Fixed: No width restriction
      >
        {/* GIF / Avatar */}
        <img
          src={gif ? gif : null}
          alt=""
          className="w-[40px] sm:w-[50px] md:w-[60px] rounded-lg border-transparent object-cover"
          id="nav"
        />
      
        {/* Center Logo */}
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <Link to={"/"}>
            <img src="/logo.png" id="nav" className="w-[140px] sm:w-[160px] md:w-[180px] h-[20px] sm:h-[22px]" />
          </Link>
        </div>
      
        {/* Menu Links & Icons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 opacity-80" id="nav">
          <Link
            className="text-white font-alien font-thin tracking-[1px] text-[10px] sm:text-[12px] md:text-[13px]"
            to={"/team"}
          >
            TEAM
          </Link>
          <Link to={"/shop"}>
            <p className="text-white font-alien font-thin tracking-[1px] text-[10px] sm:text-[12px] md:text-[13px]">
              SHOP
            </p>
          </Link>
          
          {showStatsIcon && (
            <img
              src="/user.png"
              alt=""
              className="w-[12px] sm:w-[14px] md:w-[16px] h-[12px] sm:h-[14px] md:h-[16px] cursor-pointer"
              onClick={() => setViewingStats(!viewingStats)}
            />
          )}
          
          {cardPage && (
            <img
              src="/cart.png"
              alt=""
              className="w-[12px] sm:w-[14px] md:w-[16px] h-[12px] sm:h-[14px] md:h-[16px] cursor-pointer"
              onClick={() => setViewingCart(!viewingCart)}
            />
          )}
      
          <img
            src="/logout.png"
            alt=""
            className="w-[12px] sm:w-[14px] md:w-[16px] h-[12px] sm:h-[14px] md:h-[16px] cursor-pointer"
            onClick={() => {
              console.log("Logout");
              localStorage.clear();
              navigate("/login");
            }}
          />
        </div>
      </nav>
    );
  }
};

export default Navbar;
