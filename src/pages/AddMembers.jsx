import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MemberDiv from "../components/Memberdiv";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function AddMembers() {
  const navigate = useNavigate();

  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);

  const { state } = useLocation();
  const { squadName} = state || {}; // Safely extract the state
  


  const handleAddMember = async () => {
    try {

      const res= await axios.post("https://api.mlsc.tech/user", {
        username: currentName,
        email: currentEmail,
        password: currentPassword,
        teamName: squadName,

      })
      
    } catch (error) {
      console.error("Error sending data:", error);
      
    }
    if (currentName.trim() !== "") {
      const updatedNames = [...names, currentName];
      setNames(updatedNames);
      setCurrentName("");

      if (updatedNames.length === 4) {
        console.log(names);
        setShowCompletionMessage(true);
      } else {
        setShowCompletionMessage(false);
      }
    }
  };
  const handleNext = () => {
    window.location.reload();
  };

  const [emails, setEmails] = useState([]);
  const [currentPassword, setCurrentPassword] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const handleAddEmail = () => {
    if (currentEmail.trim() !== "") {
      setEmails([...emails, currentEmail]);
      setCurrentEmail("");
    }
  };
  const handleAddPassword = () => {
    if (currentPassword.trim() !== "") {
      setPasswords([...passwords, currentPassword]);
      setCurrentPassword("");
    }
  };



  const [objectList, setObjectList] = useState([]);
  const handleAdd = () => {
    const newMember = {
      names: currentName,
      emails: currentEmail,
      passwords: currentPassword,
      callingCard: callingCard,
    };
    setObjectList([...objectList, newMember]);
    console.log(objectList);
    setCallingCard("");
    setCurrentEmail("");
    setCurrentName("");
    setCurrentPassword("");
  };

  useEffect(() => {
    console.log(squadName);
  }, []);

  return (
    <>
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
        <img
          src="/element.gif"
          alt="Background GIF"
          style={{
            position: "absolute",
            bottom: 70,
            left: 300,
            height: "80px",
            width: "100px",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <img
          src="/element.gif"
          alt="Background GIF"
          style={{
            position: "absolute",
            bottom: 25,
            left: 360,
            height: "70px",
            width: "90px",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <img
          src="/element.gif"
          alt="Background GIF"
          style={{
            position: "absolute",
            bottom: 255,
            right: 670,
            height: "100px",
            width: "120px",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Navbar />
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
          />
        </div>

        <div className="container mt-3" style={{ marginTop: "10px" }}>
          <div className="row">
            <div
              className="col-lg-8 d-flex flex-column align-items-center"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                zIndex: 4,
              }}
            >
              <span style={{ width: "900px", marginBottom: "5px" }}>
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "50px",
                    zIndex: 3,
                  }}
                >
                  SQUAD UP!
                </h1>
              </span>
              {!showCompletionMessage ? (
                <>
                  <div className="w-[800px] h-[200px] flex flex-col justify-between items-center">
                    <input
                      placeholder="MEMBER_NAME"
                      style={{
                        backgroundColor: "#141414",
                        height: "60px",
                        width: "400px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "10px",
                        padding: "20px",
                        color: "white",
                        fontSize: "15px",
                        zIndex: 3,
                        marginBottom: "10px",
                      }}
                      type="text"
                      value={currentName}
                      onChange={(e) => setCurrentName(e.target.value)}
                    />
                    <input
                      placeholder="EMAIL_ID"
                      style={{
                        backgroundColor: "#141414",
                        height: "60px",
                        width: "400px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "10px",
                        padding: "20px",
                        color: "white",
                        fontSize: "15px",
                        zIndex: 3,
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                      type="text"
                      value={currentEmail}
                      onChange={(e) => setCurrentEmail(e.target.value)}
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
                        zIndex: 3,
                        marginTop: "10px",
                      }}
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                   
                  </div>

                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "35px",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#141414",
                        height: "60px",
                        width: "200px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "15px",
                        cursor: "pointer",
                        zIndex: 3,
                      }}
                      onClick={() => {
                        handleAddMember();
                        handleAddEmail();
                        handleAddPassword();
                        handleAdd();
                      }}
                    >
                      ADD TO SQUAD
                    </button>
                   
                  </span>
                </>
              ) : (
                <div style={{ color: "white", textAlign: "center" }}>
                  <h2 className="completed-text">COMPLETED!</h2>
                  <div className="flex flex-row justify-center items-center gap-4">
                    
                    <button
                      style={{
                        backgroundColor: "#141414",
                        height: "50px",
                        width: "150px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "15px",
                        marginTop: "20px",
                        zIndex: 3,
                      }}
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="col-lg-4 flex-row flex gap-4 items-center justify-center"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              {names.map((member, index) => (
                <MemberDiv key={index} memberName={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMembers;
