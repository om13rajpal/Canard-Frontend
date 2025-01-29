import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateAvatar = () => {
  const navigate = useNavigate();

  const {state}=useLocation();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");


  const created = async (avatar) => {
    try {
      const data = {
        avatar: avatar.data.url, 
      };

      


      const response = await axios.patch(`https://api.mlsc.tech/user/${userId}`, data,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });


      setTimeout(() => {
        navigate("/avatarCreated");
      }, 3000);
    } catch (err) {
      if (err.response) {
        console.error("Error response from server:", err.response.data);
      } else {
        console.error("Error sending request:", err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center flex-col bg-black">
      <AvatarCreator
        subdomain="mlsc"
        className="w-full h-screen"
        config={{
          clearCache: true,
          quickStart: false,
        }}
        onAvatarExported={(avatar) => {
          created(avatar);  
        }}
      />
    </div>
  );
};

export default CreateAvatar;
