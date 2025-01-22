import React, { useEffect, useRef, useState } from "react";
import Emote from "../components/Emote";
import AvatarCanvas from "../components/Canvas";
import StatsBorder from "../components/StatsBorder";
import gsap from "gsap";
import Games from "../components/Games";
import Username from "../components/Username";
import { useGLTF } from "@react-three/drei";

const Team = () => {
  return (
    <div className="w-screen h-screen flex flex-col absolute bg-black">
      <img
        src="/back.png"
        className="absolute opacity-30 w-screen h-screen object-cover"
      />
      <video
        src="/back.mp4"
        autoPlay
        loop
        muted
        className="w-screen h-screen object-cover"
      />
      <div
        className="font-thaust text-white absolute text-[160px] flex items-center justify-center top-[90px] left-0 right-0 opacity-85  translate-y-[-50px]"
        id="username"
      >
        IMPOSTERS
      </div>
      <AvatarCanvas
      key={"user1"}
        viewingStats={false}
        animationUrl={"/dancee.fbx"}
        cameraDistance={2.4}
        avatarXPosition={2.4}
        avatarYPosition={-0.9}
        modelUrl={"https://models.readyplayer.me/67888ec29d4ee5b5795a8c7a.glb"}
      />
      <AvatarCanvas
        viewingStats={false}
        key={"user2"}
        animationUrl={"/drunk.fbx"}
        cameraDistance={2.4}
        avatarXPosition={0.8}
        avatarYPosition={-0.9}
        modelUrl={"https://models.readyplayer.me/6786a46a366e0dd03586ae7d.glb"}
      />
      <AvatarCanvas
      key={"user3"}
        viewingStats={false}
        animationUrl={"/anim.fbx"}
        cameraDistance={2.4}
        avatarXPosition={-0.8}
        avatarYPosition={-0.9}
        modelUrl={"https://models.readyplayer.me/678891549d4ee5b5795aa00e.glb"}
      />
      <AvatarCanvas
      key={"user4"}
        viewingStats={false}
        animationUrl={"/dancee.fbx"}
        cameraDistance={2.4}
        avatarXPosition={-2.4}
        avatarYPosition={-0.9}
        modelUrl={"https://models.readyplayer.me/678891a87db94859385cbcd4.glb"}
      />
      <div className="absolute w-screen flex bottom-[65px] h-20 justify-center items-center" id="usernames">
        <div className="absolute left-[170px]">
        <Username />
        </div>
        <div className="absolute left-[500px] translate-y-2">
        <Username />
        </div>
        <div className="absolute right-[170px] translate-y-2">
        <Username />
        </div>
        <div className="absolute right-[500px]">
        <Username />
        </div>
      </div>
      <div className="flex absolute bottom-[25px] left-[50px] z-30">
        <div id="emote">
          <Emote
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/drunk.fbx");
            }}
          />
        </div>
        <div id="emote">
          <Emote
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/drunk.fbx");
            }}
          />
        </div>
        <div id="emote">
          <Emote
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/drunk.fbx");
            }}
          />
        </div>
        <div id="emote">
          <Emote
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/drunk.fbx");
            }}
          />
        </div>
      </div>
      <div
        className="flex absolute h-screen justify-evenly items-center top-0 bottom-0 right-7 opacity-80"
        id="icons"
      >
        <div className="flex flex-col h-[25vh] justify-evenly items-center">
          <img src="/share.png" alt="" className="w-[18px] h-[18px]" />
          <img src="/web.png" alt="" className="w-[18px] h-[18px]" />
          <img src="/instagram.png" alt="" className="w-[18px] h-[18px]" />
        </div>
      </div>
      <div
        className="absolute text-white font-alien text-[12px] -rotate-90 left-0 bottom-[200px] translate-x-[-17px] opacity-75"
        id="ip"
      >
        172.31.218.165
      </div>
      <div
        className="flex absolute bottom-[25px] left-0 right-0 justify-center"
        id="lorem"
      >
        <p className=" text-[#b3b3b3] flex justify-center font-thin text-[8px] w-[35vw] text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          placeat voluptatem, quasi dolorum reprehenderit consequatur ad
          provident error dolore maiores commodi mollitia cupiditate. Libero hic
          nulla minima quasi maxime quo praesentium fuga repellendus quia esse,
          molestias accusamus sapiente eius nobis?
        </p>
      </div>
      <div
        className="font-alien text-[#b3b3b3] absolute bottom-[25px] right-[50px] font-thin text-[10px] translate-x-[-17px]"
        id="copyright"
      >
        COPYRIGHT © 2024 RESERVED FOR <i className="text-white">MLSC</i>
      </div>
      <div id="games" className="opacity-0">
        <Games />
      </div>

      <StatsBorder viewingStats={false} />
    </div>
  );
};

export default Team;
