import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useFBX, useAnimations, Gltf } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";

export function Avatar(props) {
  const group = useRef();
  const { scene, error } = useGLTF("https://models.readyplayer.me/68938dff7c6c17df660ee5ca.glb");

  if (error) {
    console.error("Error loading model:", error);
    return null;
  }

  if (!scene) {
    return null;
  }

  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  if (!nodes || !materials) {
    return null;
  }

  const { animations } = useFBX(props.animationUrl);

  animations[0].name = "mixamo.com";

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["mixamo.com"]) {
      actions["mixamo.com"].reset().play();
    }
    return () => {
      actions?.["mixamo.com"]?.stop();
    };
  }, [actions, props.animationUrl]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      {nodes.Wolf3D_Hair && materials.Wolf3D_Hair && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
      )}
      {nodes.Wolf3D_Glasses && materials.Wolf3D_Glasses && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
      )}
      {nodes.Wolf3D_Facewear && materials.Wolf3D_Facewear && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Facewear.geometry}
          material={materials.Wolf3D_Facewear}
          skeleton={nodes.Wolf3D_Facewear.skeleton}
        />
      )}
      {nodes.Wolf3D_Headwear && materials.Wolf3D_Headwear && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Headwear.geometry}
          material={materials.Wolf3D_Headwear}
          skeleton={nodes.Wolf3D_Headwear.skeleton}
        />
      )}
      {nodes.Wolf3D_Outfit_Top && materials.Wolf3D_Outfit_Top && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      )}
      {nodes.Wolf3D_Outfit_Bottom && materials.Wolf3D_Outfit_Bottom && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
      )}
      {nodes.Wolf3D_Outfit_Footwear && materials.Wolf3D_Outfit_Footwear && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
      )}
      {nodes.Wolf3D_Body && materials.Wolf3D_Body && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
      )}
      {nodes.Wolf3D_Head && materials.Wolf3D_Skin && (
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
      )}
      {nodes.Wolf3D_Teeth && materials.Wolf3D_Teeth && (
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      )}
      {nodes.Wolf3D_Beard && materials.Wolf3D_Beard && (
        <skinnedMesh
          name="Wolf3D_Beard"
          geometry={nodes.Wolf3D_Beard.geometry}
          material={materials.Wolf3D_Beard}
          skeleton={nodes.Wolf3D_Beard.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        />
      )}
      {nodes.EyeLeft && materials.Wolf3D_Eye && (
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
      )}
      {nodes.EyeRight && materials.Wolf3D_Eye && (
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
      )}
    </group>
  );
}
