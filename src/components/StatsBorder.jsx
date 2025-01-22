import gsap from "gsap";
import React from "react";

const StatsBorder = ({viewingStats}) => {
  if(viewingStats){
    gsap.to("#mid_up", {
      rotate: -90,
      x: 15.5,
      duration: 0.8,
      delay: 0.3,
      ease: "power1.out"
    })
    gsap.to("#mid_down", {
      rotate: 90,
      x: 15.5,
      duration: 0.8,
      delay: 0.3,
    })

    gsap.to("#mid_line", {
      duration: 0.8,
      delay: 0.3,
      x: 31,
      ease: "power4.out",
    })

    gsap.to("#bottom_angle", {
      rotate: 0,
      y: 15,
      x: 6,
      duration: 0.8,
      ease: "power1.out",
      delay: 0.3,
    })

    gsap.to("#bottom_line", {
      y: 30,
      duration: 0.8,
      delay: 0.3,
      ease: "power4.out"
    })
  }
  else{
    gsap.to("#mid_up", {
      rotate: -45,
      x: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power1.out"
    })
    gsap.to("#mid_down", {
      rotate: 45,
      x: 0,
      duration: 0.8,
      delay: 0.3,
    })

    gsap.to("#mid_line", {
      duration: 0.8,
      delay: 0.3,
      x: 0,
      ease: "power4.out",
    })

    gsap.to("#bottom_angle", {
      rotate: -45,
      y: 0,
      x: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power1.out"
    })

    gsap.to("#bottom_line", {
      y: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power4.out"
    })
  }
  return (
    <>
      <div className="w-[290px] h-[1px] bg-white absolute bottom-[70px] right-0 opacity-45"  id="bottom_line"></div>
      <div className="w-[1px] h-[40px] bg-white absolute bottom-[0px] right-[319px] opacity-45"></div>
      <div className="w-[44px] h-[1px] bg-white absolute bottom-[55px] right-[282px] -rotate-45 opacity-45" id="bottom_angle"></div>
      <div className="w-[44px] h-[1px] bg-white absolute top-[38.5vh] right-[35px] -rotate-45 opacity-45" id="mid_up"></div>
      <div className="w-[44px] h-[1px] bg-white absolute bottom-[38.6vh] right-[35px] rotate-45 opacity-45" id="mid_down"></div>
      <div className="w-[1px] h-[37vh] bg-white absolute top-0 right-[41px] opacity-45"></div>
      <div className="w-[1px] h-[19.6vh] bg-white absolute top-[40.1vh] right-[72px] opacity-45" id="mid_line"></div>
      <div className="w-[1px] h-[37vh] bg-white absolute bottom-0 right-[41px] opacity-45"></div>
    </>
  );
};

export default StatsBorder;
