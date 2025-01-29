import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function CreateSquad() {
  const [squadName, setSquadName] = useState("");
  const [callingCard, setCallingCard] = useState("");
    const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const admin_token = localStorage.getItem("admin_token");
  console.log(admin_token);

  const navigate = useNavigate();

  const handleDiveInClick = async () => {
    try {
      const res = await axios.post(
        "https://api.mlsc.tech/team",
        {
          name: squadName,
          callingCard: parseInt(callingCard),
        },
        {
          headers: {
            Authorization: `Bearer ${admin_token}`,
          },
        }
      );

      console.log(res.data);

      navigate("/addMembers", { state: { squadName } });
    } catch (error) {
      setPopupMessage(error.response.data.message.toUpperCase());
      setShowPopup(true);
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

        

          <div
            style={{
              width: "100%",
              height: "32vh",
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
                fontSize: "9vh",
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
              top: "55%",
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
                height: "8vh",
                width: "26vw",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "10px",
                padding: "20px",
                color: "white",
                fontSize: "1vw",
                marginTop: "2vw",
              }}
              type="text"
              value={squadName}
              onChange={(e) => setSquadName(e.target.value)}
            />
            <select
              style={{
                backgroundColor: "#141414",
                height: "8vh",
                width: "26vw",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "10px",
                padding: "20px",
                color: "#9CA3AF",
                fontSize: "1vw",
                zIndex: 3,
                cursor: "pointer",
                marginTop: "2vw",
              }}
              name="CHOOSE"
              id="CHOOSE"
              defaultValue=""
              onChange={(e) => setCallingCard(e.target.value)}
            >
              <option
                value=""
                disabled
                style={{
                  color: "#9CA3AF",
                }}
              >
                CHOOSE YOUR CALLING CARD
              </option>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            <div
              onClick={handleDiveInClick}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2vw",
                cursor: "pointer",
              }}
            >
              <img
                src="/playbutton.png"
                alt="Play Button"
                style={{ width: "8vh", marginRight: "10px" }}
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
