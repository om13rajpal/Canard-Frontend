import React, { useEffect, useRef, useState } from "react";
import Emote from "../components/Emote";
import AvatarCanvas from "../components/Canvas";
import StatsBorder from "../components/StatsBorder";
import Games from "../components/Games";
import Username from "../components/Username";
import axios from "axios";

const Team = () => {
  const [member1, setMember1] = useState({});
  const [member2, setMember2] = useState({});
  const [member3, setMember3] = useState({});
  const [member4, setMember4] = useState({});
  const [teamName, setTeamName] = useState("");
  useEffect(() => {
    getTeam();
  }, []);

  async function getTeam() {
    const teamId = localStorage.getItem("teamId");
    const token = localStorage.getItem("token");
    const res = await axios.get(`https://api.mlsc.tech/team/${teamId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.data;

    setMember1(data.data.team.members[0]);
    setMember2(data.data.team.members[1]);
    setMember3(data.data.team.members[2]);
    setMember4(data.data.team.members[3]);
    setTeamName(data.data.team.name);
  }

  return (
    <div className="w-screen h-screen flex flex-col absolute bg-black">
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
        {teamName}
      </div>
      {member1 && member1.avatar && (
        <AvatarCanvas
          key={"user1"}
          viewingStats={false}
          animationUrl={"/fight.fbx"}
          cameraDistance={2.4}
          avatarXPosition={2.4}
          avatarYPosition={-0.9}
          modelUrl={member1.avatar}
        />
      )}
      {member2 && member2.avatar && (
        <AvatarCanvas
          viewingStats={false}
          key={"user2"}
          animationUrl={"/team2.fbx"}
          cameraDistance={2.4}
          avatarXPosition={0.8}
          avatarYPosition={-0.9}
          modelUrl={member2.avatar}
        />
      )}
      {member3 && member3.avatar && (
        <AvatarCanvas
          viewingStats={false}
          animationUrl={"/team3.fbx"}
          cameraDistance={2.4}
          avatarXPosition={-0.8}
          avatarYPosition={-0.9}
          modelUrl={member3.avatar}
        />
      )}
      {member4 && member4.avatar && (
        <AvatarCanvas
          viewingStats={false}
          animationUrl={"/team4.fbx"}
          cameraDistance={2.4}
          avatarXPosition={-2.4}
          avatarYPosition={-0.9}
          modelUrl={member4.avatar}
        />
      )}
      <div
        className="absolute w-screen flex bottom-[65px] h-20 justify-center items-center"
        id="usernames"
      >
        {member4 && (
          <div className="absolute left-[10vw]">
            <Username username={member4.username} />
          </div>
        )}
        {member3 && (
          <div className="absolute left-[32vw] translate-y-2">
            <Username username={member3.username} />
          </div>
        )}
        {member1 && (
          <div className="absolute right-[10vw] translate-y-2">
            <Username username={member1.username} />
          </div>
        )}
        {member2 && (
          <div className="absolute right-[32vw]">
            <Username username={member2.username} />
          </div>
        )}
      </div>
      <div className="flex absolute bottom-[25px] left-[50px] z-30">
        <div id="emote" className="hidden -z-50">
          <Emote
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/drunk.fbx");
            }}
          />
        </div>
        <div id="emote" className="hidden -z-50">
          <Emote
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/drunk.fbx");
            }}
          />
        </div>
        <div id="emote" className="hidden -z-50">
          <Emote
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/drunk.fbx");
            }}
          />
        </div>
        <div id="emote" className="hidden -z-50">
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
