import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const AvatarCanvas = ({ viewingStats, animationUrl, cameraDistance, avatarXPosition, avatarYPosition, modelUrl }) => {
  const group = useRef();

  if(viewingStats){
    if (group.current) {
      gsap.to(group.current.position, { x: 0, duration: 1 });
    }
  }
  else{
    if (group.current) {
      gsap.to(group.current.position, { x: avatarXPosition, duration: 1 });
    }
  }

  return (
    <Canvas
      camera={{
        position: [0, 0, cameraDistance],
        fov: 70,
        near: 0.01,
        far: 1000,
        isPerspectiveCamera: false,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        position: "absolute",
        zindex: 10,
      }}
    >
      <group
        position={[avatarXPosition, avatarYPosition, 0]}
        rotation={[Math.PI / 2, Math.PI, Math.PI]}
        ref={group}
      >
        <Avatar animationUrl={animationUrl} modelUrl={modelUrl}/>
      </group>
      <Environment files={"/hrdi.hdr"} />
    </Canvas>
  );
};

export default AvatarCanvas;
