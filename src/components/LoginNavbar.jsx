import React from "react";

function LoginNavbar() {
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark d-flex p-3"
        style={{ height: "60px" }}
      >
        <span
          className="navbar-brand mb-0 h1"
          style={{
            color: "white",
            fontSize: "30px",
            marginRight: "950px",
            fontFamily: "Archivo",
            marginLeft: "20px",
            fontWeight: "700",
          }}
        >
          CANARD
        </span>

        <div
          style={{
            display: "flex",
            marginTop: "20px",
            gap: "15px",
          }}
        >
          <button
            style={{
              border: "1px solid rgba(255, 255, 255, 0.5)",
              backgroundColor: "#141414",
              color: "white",
              width: "90px",
              height: "35px",
              borderRadius: "10px",
              fontWeight: "450",
              fontSize: "14px",
            }}
          >
            HOME
          </button>

          <button
            style={{
              border: "1px solid rgba(255, 255, 255, 0.5)",
              backgroundColor: "#141414",
              color: "white",
              width: "90px",
              height: "35px",
              borderRadius: "10px",
              fontWeight: "450",
              fontSize: "14px",
            }}
          >
            MLSC
          </button>

          <button
            style={{
              border: "1px solid rgba(255, 255, 255, 0.5)",
              backgroundColor: "#141414",
              color: "white",
              width: "130px",
              height: "35px",
              borderRadius: "10px",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            DASHBOARD
          </button>
        </div>
      </nav>
    </>
  );
}

export default LoginNavbar;
