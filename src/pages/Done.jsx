import React, { useEffect, useRef } from "react";

const Done = ({targetText}) => {
  const textRef = useRef(null); 
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  useEffect(() => {
    const element = textRef.current;
    const totalDuration = 2; 
    const frameRate = 120; 
    const totalFrames = totalDuration * frameRate; 
    let frame = 0;

    const scrambleText = () => {
      const targetArray = targetText.split("");
      const scrambledArray = targetArray.map((_, index) => {
        if (frame < totalFrames) {
          if (frame > (totalFrames / targetArray.length) * index) {
            return targetArray[index];
          }
          return characters[Math.floor(Math.random() * characters.length)];
        }
        return targetArray[index];
      });

      element.innerText = scrambledArray.join("");

      frame++;
      if (frame <= totalFrames) {
        requestAnimationFrame(scrambleText);
      }
    };

    scrambleText();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        color: "#FFFFFF",
      }}
    >
      <img src="/back.png" className="absolute w-screen h-screen object-cover opacity-30" alt="" />
      <span className="opacity-80 tracking-[3px] font-alien" ref={textRef}></span>
    </div>
  );
};

export default Done;