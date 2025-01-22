import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";

export default function CreateSquad() {
  const [squadName, setSquadName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleDiveInClick = () => {
    navigate("/addMembers", { state: { squadName, password } });
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
              top: "55%",
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
              CREATE YOUR SQUAD
            </h1>
          </div>

          <div
            style={{
              position: "absolute",
              top: "65%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 5,
              textAlign: "center",
            }}
          >
            <input
              placeholder="SQUAD_NAME"
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
              value={squadName}
              onChange={(e) => setSquadName(e.target.value)}
            />

            <input
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
                marginTop: "20px",
              }}
              type="password"
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
