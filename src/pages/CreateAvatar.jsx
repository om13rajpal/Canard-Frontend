import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAvatar = () => {
  const navigate = useNavigate();
 
  const created=async(avatar)=>{
    await axios.post("https://api.mlsc.tech/team",{
      avatar:avatar.data.url
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="flex items-center justify-center flex-col bg-black">
      <AvatarCreator
        subdomain="mlsc"
        className="w-full h-screen"
        config={{
          clearCache: true,
          quickStart: false,
        }}
        onAvatarExported={ (avatar) => {
          console.log(avatar);
          console.log(avatar.data.url);
          created(avatar);
          console.log("avatar saved");
          setInterval(() => {
            navigate("/avatarCreated");
          }, 3000);
        }}
      />
    </div>
  );
};

export default CreateAvatar;
