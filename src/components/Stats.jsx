import gsap from "gsap";
import React, { useEffect } from "react";

const Stats = ({ viewingStats, stats, game }) => {
  if (viewingStats) {
    gsap.to("#stats", {
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#bottom_line_stats", {
      y: "0px",
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#top_line_1", {
      x: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#top_line_2", {
      x: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });
    gsap.to("#top_sub_1", {
      x: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });
    gsap.to("#top_sub_2", {
      x: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_1", {
      x: 0,
      y: "-0.55vh",
      rotation: 55,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_2", {
      x: 0,
      rotation: -305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_3", {
      x: 0,
      rotation: 305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_4", {
      x: 0,
      rotation: -305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_5", {
      x: 0,
      rotation: 305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_6", {
      x: 0,
      y: "-1.9vh",
      duration: 1.5,
      ease: "power4.out",
      rotation: 305,
      delay: 0.5,
    });

    gsap.to("#pta_nai_7", {
      x: "0px",
      y: "-1.9vh",
      rotation: -305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_8", {
      x: 0,
      y: "-0.5vh",
      rotation: 305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });
  } else {
    gsap.to("#stats", {
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#bottom_line_stats", {
      y: "65vw",
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#top_line_1", {
      x: "-65vw",
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#top_line_2", {
      x: "65vw",
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });
    gsap.to("#top_sub_1", {
      x: "65vw",
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#top_sub_2", {
      x: "-65vw",
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_1", {
      x: "-65vw",
      rotate: -305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_2", {
      x: "-65vw",
      rotation: 305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_3", {
      x: "-65vw",
      rotation: -305,

      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_4", {
      x: "65vw",
      rotation: 305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_5", {
      x: "65vw",
      duration: 1.5,
      rotation: -305,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_6", {
      x: "-65vw",
      rotation: -305,

      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_7", {
      x: "65vw",
      rotation: 305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.to("#pta_nai_8", {
      x: "65vw",
      rotation: -305,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });
  }
  return (
    <div className="flex w-screen justify-center items-center translate-y-[60px]">
      <div
        className="w-[22.2vw] h-[1px] bg-white absolute bottom-[-2.5px] translate-y-[-65vw]"
        id="bottom_line_stats"
      ></div>
      <div
        className="w-[4.6vw] h-[1px] bg-white absolute bottom-[13vw] left-[38.9vw] translate-x-[-65vw]"
        id="top_line_1"
      ></div>
      <div
        className="w-[4.6vw] h-[1px] bg-white absolute bottom-[13vw] right-[38.9vw] translate-x-[65vw]"
        id="top_line_2"
      ></div>
      <div
        className="w-[10.8vw] h-[1px] bg-white absolute bottom-[11.4vw] translate-x-[-65vw]"
        id="top_sub_1"
      ></div>
      <div
        className="w-[10.8vw] h-[1px] bg-white absolute bottom-[14.6vw] translate-x-[-65vw]"
        id="top_sub_2"
      ></div>
      <div
        className="w-[8vw] h-[1px] bg-white rotate-[55deg] absolute bottom-[49px] left-[32.6vw] translate-x-[-65vw]"
        id="pta_nai_1"
      ></div>
      <div
        className="w-[2vw] h-[1px] bg-white rotate-[55deg] absolute bottom-[12.2vw] left-[43vw] translate-x-[-65vw]"
        id="pta_nai_2"
      ></div>
      <div
        className="w-[2vw] h-[1px] bg-white -rotate-[55deg] absolute bottom-[13.8vw] left-[43vw] translate-x-[-65vw]"
        id="pta_nai_3"
      ></div>
      <div
        className="w-[2vw] h-[1px] bg-white rotate-[55deg] absolute bottom-[13.8vw] right-[43vw] translate-x-[-65vw]"
        id="pta_nai_4"
      ></div>
      <div
        className="w-[2vw] h-[1px] bg-white -rotate-[55deg] absolute bottom-[12.2vw] right-[43vw] translate-x-[-65vw]"
        id="pta_nai_5"
      ></div>
      <div
        className="w-[8vw] h-[1px] bg-white -rotate-[55deg] absolute bottom-[150px] left-[32.6vw] translate-x-[-65vw]"
        id="pta_nai_6"
      ></div>
      <div
        className="w-[8vw] h-[1px] bg-white rotate-[55deg] absolute bottom-[150px] right-[32.6vw] translate-x-[-65vw]"
        id="pta_nai_7"
      ></div>
      <div
        className="w-[8vw] h-[1px] bg-white -rotate-[55deg] absolute bottom-[49px] right-[32.6vw] translate-x-[-65vw]"
        id="pta_nai_8"
      ></div>
      {!stats || Object.keys(stats).length === 0 ? (
        <h1>Stats not available</h1>
      ) : (
        <div className="absolute bottom-[15vw] text-white opacity-0" id="stats">
          <h1>{game}</h1>
          {Object.keys(stats[game]).map((key) => (
            <div key={key}>
              <p>
                {stats[game][key].title}: {stats[game][key].value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stats;
