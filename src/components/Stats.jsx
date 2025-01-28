import gsap from "gsap";
import React, { useEffect } from "react";

const Stats = ({ viewingStats, stats, game }) => {
  useEffect(() => {
    if (viewingStats) {
      gsap.to("#stats_container", {
        duration: 0.5,
        y: 0,
        opacity: 1,
      });
    } else {
      gsap.to("#stats_container", {
        duration: 0.5,
        y: "60px",
        opacity: 0,
      });
    }
  }, [viewingStats]);

  return (
    <div
      className="flex w-screen h-screen justify-center items-center absolute"
      id="stats_container"
    >
      {!stats || Object.keys(stats).length === 0 ? (
        <h1 className="text-white">Stats not available</h1>
      ) : (
        <div
          className="flex flex-col items-center w-[400px] h-auto p-6 rounded-2xl shadow-lg text-white opacity-0 translate-y-[60px]"
          id="stats"
          style={{
            backgroundImage: "url('/stats.png')",
            backgroundSize: "contain", // Ensure the image fits within the div
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", // Center the image
          }}
        >
          <h1 className="text-2xl font-bold mb-4">{game}</h1>
          {Object.keys(stats[game]).map((key) => (
            <div key={key} className="w-full text-center">
              <p className="text-lg">
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
