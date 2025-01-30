import gsap from "gsap";
import React, { useEffect } from "react";

const Username = ({username}) => {
  useEffect(() => {
    gsap.to("#corner", {
      x: 2,
      duration: 2,
      scaleX: 10,
      transformOrigin: "right",
      ease: "expo.out",
      delay: 2,
    });

    gsap.to("#name", {
      duration: 2,
      width: "150px",
      ease: "expo.out",
      delay: 2,
    });

    gsap.to("#name p", {
      duration: 2,
      opacity: 1,
      ease: "expo.out",
      delay: 2,
    });
  }, []);

  return (
    <div className="flex">
      <div className="h-[26px] w-[1px] bg-blue-950" id="corner"></div>
      <div
        className="h-[26px] overflow-hidden flex justify-center items-center text-[12px] text-white font-alien opacity-70 text-center bg-[url('/texture.png')] bg-cover bg-zinc-700 bg-blend-overlay"
        id="name"
        style={{ width: "0px" }}
      >
        <p className="translate-y-[1.5px] opacity-0 uppercase">{username}</p>
      </div>
    </div>
  );
};

export default Username;
