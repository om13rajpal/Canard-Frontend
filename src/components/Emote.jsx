import React from "react";

const Emote = ({ width, setAnimationUrl,imgSrc }) => {

  
  return (
    <div
      className="flex justify-center items-center border-[2px] border-[#bbbbbb] rounded-[50%] p-2 ml-5 opacity-75"
      onClick={setAnimationUrl}
    >
      <img src={imgSrc} width={width}  />
    </div>
  );
};

export default Emote;
