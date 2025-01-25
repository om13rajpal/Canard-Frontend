import gsap from "gsap";
import React, { useState } from "react";
import Stats from "./Stats";

const Games = () => {
  const [viewingStats, setViewingStats] = useState(false);
  function handleMouseEnter() {
    gsap.to("#fortnite", {
      opacity: 0.5,
      scale: 1.3,
      y: -5,
      ease: "power4.out",
      duration: 0.5,
    });

    gsap.to("#stats", {
      opacity: 0.6,
      duration: 0.5,
    });

    setViewingStats(true);
  }
  function handleMouseLeave() {
    gsap.to("#fortnite", {
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "power4.out",
      duration: 0.5,
    });

    gsap.to("#stats", {
      opacity: 0,
      duration: 0.5,
    });

    setViewingStats(false);
  }

  return (
    <div className="absolute bottom-[80px] right-0 left-0 ">
      <Stats viewingStats={viewingStats}/>
      <div className="wrapper">
        <img
          className="item item1 opacity-80"
          src="/games/fortnite.png"
          id="fortnite"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="item item2 opacity-80"
          src="/games/csgo.png"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="item item3 opacity-80"
          src="/games/forza.png"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="item item4 opacity-80"
          src="/games/rl.png"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="item item5 opacity-80"
          src="/games/tekken8.png"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="item item6 opacity-80"
          src="/games/wwe.png"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="item item7 opacity-80"
          src="/games/gtav.png"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="item item8 opacity-80"
          src="/games/mini.png"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Games;
