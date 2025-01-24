import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const navigate = useNavigate();
  let res;
  const handleDiveInClick = async () => {
    try {
      const res = await axios.post("https://api.mlsc.tech/user/login", {
        username: username,
        password: password,
      });
  
      // Extract token and teamId from the response data
      const token = res.data.data.userToken;  // Assuming this is how token is structured in the response
      const teamId = res.data.data.user.teamId; // Assuming teamId is nested under `user`
  
      // Set token and teamId to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("teamId", teamId);
  
      console.log(res.data);
      console.log(res.data.data.user.avatar === null);
  
      if (res.data.data.user.avatar === null) {
        console.log("No avatar");
        setPopupMessage(
          "No avatar found. Please create an avatar. Redirecting to avatar creation page."
        );
        setShowPopup(true);
        setTimeout(() => {
          navigate("/createAvatar", {
            state: { userId: res.data.data.user.id, token, teamId },  // Pass token and teamId to the next page
          });
        }, 2000);
      } else {
        navigate("/", {
          state: { username, token, teamId },  // Pass token and teamId here as well
        });
      }
    } catch (error) {
      console.log(error.response?.data?.message);
      setPopupMessage(error.response?.data?.message || "An error occurred.");
      setShowPopup(true);
  
      if (!error.response?.data?.status) {
        return;
      }
      console.error("Error sending data:", error);
    }
  };
  

  return (
    <>
      <div>
        <div
          style={{
            position: "relative",
            height: "100vh",
            width: "100vw",
          }}
        >
          <img
            src="/image.png"
            alt="Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />

          <LoginNavbar />

          <div
            style={{
              width: "100%",
              height: "250px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                objectFit: "cover",
                zIndex: 2,
              }}
              src="/img1.gif"
              alt="Gif"
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 4,
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "50px",
                fontWeight: "bold",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              }}
            >
              LOGIN WITH YOUR SQUAD
            </h1>
          </div>

          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 5,
              textAlign: "center",
            }}
          >
            <input
              placeholder="USERNAME"
              style={{
                backgroundColor: "#141414",
                height: "60px",
                width: "400px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "10px",
                padding: "20px",
                color: "white",
                fontSize: "15px",
                marginTop: "25px",
              }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id=""
              placeholder="PASSWORD"
              style={{
                backgroundColor: "#141414",
                height: "60px",
                width: "400px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "10px",
                padding: "20px",
                color: "white",
                fontSize: "15px",
                marginTop: "25px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div
              onClick={handleDiveInClick}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              <img
                src="/playbutton.png"
                alt="Play Button"
                style={{ width: "50px", marginRight: "10px" }}
              />
              <span style={{ color: "white", fontSize: "15px" }}>DIVE IN</span>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#c0c0c0] p-10 rounded-lg shadow-lg text-center">
            <h3 className="text-[16px] font-alien tracking-[2px] mb-4">
              {popupMessage}
            </h3>
            <button
              className="bg-black text-white px-4 py-[2px] rounded-md"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
