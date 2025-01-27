import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  viewingStats,
  setViewingStats,
  cardPage,
  viewingCart,
  setViewingCart,
  currentPath, // Access the current path
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

  // Conditionally render the Stats icon only if the current path is not '/team'
  const showStatsIcon = currentPath !== "/team" && currentPath !== "/login" && currentPath!=="/shop";

  if (currentPath === "/login" || currentPath === "/register" || currentPath === "/adminLogin" || currentPath === "/addMembers") {
    return <>
      <div className="absolute -top-12 z-50 right-0 left-0 flex justify-center items-center">
        <Link to={"/"}>
          <img src="/logo.png" id="nav" className="w-[210px] h-[25px]" />
        </Link>
      </div>
    </>
  }

  else{    
    return (
    <nav className="flex absolute z-30 w-full justify-between items-center px-[50px] top-3 translate-y-[-70px]">
      <img
        src={gif ? gif : null}
        alt=""
        className="w-[80px] rounded-lg border-transparent object-cover"
        style={{
          aspectRatio: "2/1",
        }}
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
        {showStatsIcon && (
          <img
            src="/user.png"
            alt=""
            className="opacity-80 w-[18px] h-[18px] cursor-pointer"
            onClick={() => {
              setViewingStats(!viewingStats);
            }}
            />
          )}
        {cardPage ? (
          <img
          src="/cart.png"
          alt=""
          className="opacity-80 w-[18px] h-[18px] cursor-pointer"
            onClick={() => {
              setViewingCart(!viewingCart);
            }}
          />
        ) : null}
        <img
          src="/logout.png"
          alt=""
          className="opacity-80 w-[18px] h-[18px] cursor-pointer"
          onClick={() => {
            console.log("Logout");
            localStorage.clear();
            navigate("/login");
          }}
        />
      </div>
    </nav>
  );
};
}

export default Navbar;
