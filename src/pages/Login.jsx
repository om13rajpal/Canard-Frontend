import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let res;
  const handleDiveInClick = async () => {
    try {
      res = await axios.post("https://api.mlsc.tech/user/login", {
        username: username,
        password: password,
      });
      console.log(res.data);
      console.log(res.data.data.user.avatar === null);
      if (res.data.data.user.avatar === null) {
        console.log("No avatar");
        navigate("/createAvatar", { state: { userId: res.data.data.user.id } });
        alert("Please create an avatar first");
      } else {
        navigate("/", { state: { username } });
      }
    } catch (error) {
      console.log(error.response.data.message);
      if (!error.response.data.status) {
        alert(error.response.data.message);
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
    </>
  );
}
