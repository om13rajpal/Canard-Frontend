import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateAvatar = () => {
  const navigate = useNavigate();

  const {state}=useLocation();
  const userId = state.userId;
  const token = state.token;

  console.log("User ID:", userId);

  const created = async (avatar) => {
    try {
      const data = {
        avatar: avatar.data.url, 
      };

      

       console.log("Token:", token);
      console.log("Sending payload:", data);

      const response = await axios.patch(`https://api.mlsc.tech/user/${userId}`, data,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });

      console.log("Avatar saved successfully:", response.data);

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
          console.log("Avatar exported:", avatar);
          console.log("Avatar URL:", avatar.data.url);
          created(avatar);  
        }}
      />
    </div>
  );
};

export default CreateAvatar;
