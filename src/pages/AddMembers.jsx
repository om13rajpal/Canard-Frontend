import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MemberDiv from "../components/Memberdiv";
import { useLocation } from "react-router-dom";

function AddMembers() {
  
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);

  const { state } = useLocation();
  const { squadName, password } = state || {}; // Safely extract the state

  const handleAddMember = () => {
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
    setNames([]);
    setShowCompletionMessage(false);
  };
  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const handleAddEmail = () => {
    if (currentEmail.trim() !== "") {
      setEmails([...emails, currentEmail]);
      setCurrentEmail("");
    }
  };

  useEffect(()=>{
    console.log(squadName);
    console.log(password);
  }, [])

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

        <div className="container mt-3" style={{ marginTop: "40px" }}>
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
              <span style={{ width: "900px", marginBottom: "20px" }}>
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
                      marginTop: "-20px",
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
                      marginTop: "25px",
                    }}
                    type="text"
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                  />
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
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
                      }}
                      onClick={() => {
                        handleAddMember();
                        handleAddEmail();
                      }}
                    >
                      ADD TO SQUAD
                    </button>

                    <span style={{ color: "white", margin: "0 20px" }}>|</span>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="/playbutton.png"
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      <span style={{ color: "white", fontSize: "15px" }}>
                        MISSION
                      </span>
                    </div>
                  </span>
                </>
              ) : (
                <div style={{ color: "white", textAlign: "center" }}>
                  <h2 className="completed-text">COMPLETED!</h2>
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
                    }}
                    onClick={handleNext}
                  >
                    Next ➡
                  </button>
                </div>
              )}
            </div>
            <div className="col-lg-4" style={{ marginTop: "40px" }}>
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
