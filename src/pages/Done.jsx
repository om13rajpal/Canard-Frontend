import React, { useEffect, useRef } from "react";

const Done = ({ targetText }) => {
  const textRef = useRef(null);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  useEffect(() => {
    const element = textRef.current;
    const totalDuration = 1.2;
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
  }, [targetText]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        color: "#FFFFFF",
        width: "100%",
        padding: "0 10px", 
        overflow: "hidden", 
        textAlign: "center", 
      }}
    >
      <img src="/back.png" className="absolute w-screen h-screen object-cover opacity-30" alt="" />
      
      <span
        ref={textRef}
        style={{
          maxWidth: "90%", 
          width: "auto",
          whiteSpace: "normal", 
          overflowWrap: "break-word", 
          wordBreak: "break-word", 
          textAlign: "center", 
          fontFamily: "alien, sans-serif", 
          display: "inline-block", 
        }}
      ></span>

      <style jsx>{`
        @media (max-width: 480px) {
          span {
            font-size: 18px; /* Reduce font size for smaller screens */
            line-height: 1.2; /* Ensure better spacing */
            white-space: normal; /* Allow text wrapping */
          }
        }

        @media (min-width: 480px) {
          span {
            font-size: 25px;
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
};

export default Done;
