import React from "react";

function MemberDiv({ memberName }) {
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        marginBottom: "10px",
      }}
    >
      <img
        src="/member.png"
        alt="Member Card"
        style={{
          width: "100%",
          display: "block",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {memberName}
      </div>
    </div>
  );
}

export default MemberDiv;
