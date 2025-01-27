import gsap from "gsap";
import React, { useState } from "react";
import Stats from "./Stats";

const Games = ({ stats }) => {
  const [viewingStats, setViewingStats] = useState(false);
  const [game, setGame] = useState("bgmi");
  function handleMouseEnter(game) {
    // Pause the animations for all items
    const items = document.querySelectorAll(".item");
    items.forEach((item) => item.classList.add("paused"));

    // Apply the hover effect to the specific item
    gsap.to(`#${game}`, {
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
    setGame(game);
  }

  function handleMouseLeave(game) {
    // Resume the animations for all items
    const items = document.querySelectorAll(".item");
    items.forEach((item) => item.classList.remove("paused"));

    // Revert the hover effect for the specific item
    gsap.to(`#${game}`, {
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
      <Stats viewingStats={viewingStats} stats={stats} game={game} />
      <div className="wrapper">
        <img
          className="item item1 opacity-80"
          src="/games/fortnite.png"
          id="fortnite"
          onMouseEnter={() => handleMouseEnter("fortnite")}
          onMouseLeave={() => handleMouseLeave("fortnite")}
        />
        <img
          className="item item2 opacity-80"
          src="/games/csgo.png"
          id="csgoFullTeam"
          onMouseEnter={() => handleMouseEnter("csgoFullTeam")}
          onMouseLeave={() => handleMouseLeave("csgoFullTeam")}
        />
        <img
          className="item item3 opacity-80"
          src="/games/forza.png"
          id="forzaHorizon"
          onMouseEnter={() => handleMouseEnter("forzaHorizon")}
          onMouseLeave={() => handleMouseLeave("forzaHorizon")}
        />
        <img
          className="item item4 opacity-80"
          src="/games/rl.png"
          id="rocketLeague"
          onMouseEnter={() => handleMouseEnter("rocketLeague")}
          onMouseLeave={() => handleMouseLeave("rocketLeague")}
        />
        <img
          className="item item5 opacity-80"
          src="/games/tekken8.png"
          id="tekken8"
          onMouseEnter={() => handleMouseEnter("tekken8")}
          onMouseLeave={() => handleMouseLeave("tekken8")}
        />
        <img
          className="item item6 opacity-80"
          src="/games/wwe.png"
          id="wwe"
          onMouseEnter={() => handleMouseEnter("wwe")}
          onMouseLeave={() => handleMouseLeave("wwe")}
        />
        <img
          className="item item7 opacity-80"
          src="/games/gtav.png"
          id="gtaSanAndreas"
          onMouseEnter={() => handleMouseEnter("gtaSanAndreas")}
          onMouseLeave={() => handleMouseLeave("gtaSanAndreas")}
        />
        <img
          className="item item8 opacity-80"
          src="/games/mini.png"
          id="miniMilitia"
          onMouseEnter={() => handleMouseEnter("miniMilitia")}
          onMouseLeave={() => handleMouseLeave("miniMilitia")}
        />
      </div>
    </div>
  );
};

export default Games;
