import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ viewingStats, setViewingStats, cardPage, viewingCart, setViewingCart }) => {
  useEffect(() => {
    gsap.to("#nav", {
      y: 70,
      stagger: 0.15,
      duration: 0.45,
      delay: 3,
    });
  });
  return (
    <nav className="flex absolute z-30 w-full justify-between items-center px-[50px] top-3 translate-y-[-70px]">
      <img
        src="/callingtwo.gif"
        alt=""
        className="bg-black w-[5vw] rounded-lg"
        id="nav"
      />
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
        <Link to={"/"}>
        <img src="/logo.png" id="nav" className="w-[210px] h-[25px]" />
        </Link>
      </div>
      <div className="opacity-80 w-[25vw] flex justify-evenly" id="nav">
        <Link
          className="text-white font-alien font-thin tracking-[1.2px] text-[14px]"
          to={"/team"}
        >
          TEAM
        </Link>
        <Link to={"/shop"}>
        <p className="text-white font-alien font-thin tracking-[1.2px] text-[14px] mr-4">
          SHOP
        </p>
        </Link>
        <img
          src="/user.png"
          alt=""
          className="opacity-80 w-[18px] h-[18px]"
          onClick={() => {
            setViewingStats(!viewingStats);
          }}
        />
        {cardPage ? (
          <img
            src="/cart.png"
            alt=""
            className="opacity-80 w-[18px] h-[18px]"
            onClick={()=>{
              setViewingCart(!viewingCart);
            }}
          />
        ) : null}
        <img
          src="/logout.png"
          alt=""
          className="opacity-80 w-[18px] h-[18px]"
          onClick={()=>{
            console.log("Logout");
          }}
        />
        
      </div>
    </nav>
  );
};

export default Navbar;
