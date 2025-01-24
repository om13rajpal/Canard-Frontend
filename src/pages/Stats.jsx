import React, { useEffect, useRef, useState } from "react";
import Emote from "../components/Emote";
import AvatarCanvas from "../components/Canvas";
import StatsBorder from "../components/StatsBorder";
import gsap from "gsap";
import Games from "../components/Games";
import { toPng } from "html-to-image";

const Stats = ({ viewingStats }) => {
  const [animationUrl, setAnimationUrl] = useState("/dancee.fbx");

  const scrollRef = useRef();
  const pageRef = useRef();

  async function captureScreenshot() {
    if (pageRef.current) {
      try {
        const image = await toPng(pageRef.current);
        console.log("clicked");
        console.log(image);
        return image;
      } catch (e) {
        console.log("image not captured", e);
      }
    }
  }

  const shareScreenshot = async () => {
    const image = await captureScreenshot();
    if (image && navigator.share) {
      try {
        const blob = await (await fetch(image)).blob();
        const filesArray = [
          new File([blob], "screenshot.png", { type: "image/png" }),
        ];

        navigator.share({
          files: filesArray,
          text: "Check out this awesome screenshot!",
          title: "My Website Screenshot",
        });
      } catch (error) {
        console.error("Error sharing screenshot:", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    let scrollSpeed = 1;
    let animationFrame;

    const scroll = () => {
      if (scrollElement) {
        scrollElement.scrollLeft += scrollSpeed;

        if (
          scrollElement.scrollLeft >=
          scrollElement.scrollWidth - scrollElement.clientWidth
        ) {
          scrollElement.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  if (viewingStats) {
    gsap.to("#games", {
      opacity: 1,
      duration: 0.8,
      delay: 0.4,
    });
    gsap.to("#emote", {
      x: -300,
      stagger: 0.15,
      duration: 0.45,
      ease: "power4.out",
    });

    gsap.to("#ip", {
      x: -100,
      delay: 0.45,
      duration: 0.8,
      ease: "expo.out",
    });

    gsap.to("#icons", {
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#copyright", {
      y: 17,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#lorem", {
      y: 10,
      duration: 1,
    });

    gsap.to("#japanese", {
      opacity: 0,
      duration: 0.5,
    });

    const usernameTl = gsap.timeline();

    usernameTl.to("#username", {
      y: -330,
      duration: 0.5,
      ease: "power3.out",
    });

    usernameTl.to("#username", {
      x: -420,
      duration: 0.5,
      scale: 0.3,
      ease: "elastic.out",
    });

    const teamnameTl = gsap.timeline();

    teamnameTl.to("#teamname", {
      y: -310,
      duration: 0.5,
      delay: 0.13,
      ease: "power3.out",
    });

    teamnameTl.to("#teamname", {
      x: -280,
      duration: 0.5,
      scale: 0.35,
      ease: "elastic.out",
    });

    gsap.to("#credits", {
      x: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  } else {
    gsap.to("#emote", {
      x: 0,
      stagger: 0.15,
      duration: 0.45,
      ease: "expo.out",
    });

    gsap.to("#ip", {
      x: 0,
      delay: 0.45,
      duration: 0.8,
      ease: "expo.out",
    });

    gsap.to("#icons", {
      opacity: 1,
      delay: 0.2,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#copyright", {
      y: 0,
      delay: 0.8,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#lorem", {
      y: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.to("#japanese", {
      opacity: 1,
      duration: 0.5,
    });
    const teamnameTl = gsap.timeline();

    teamnameTl.to("#teamname", {
      x: 0,
      duration: 0.5,
      ease: "power4.out",
      scale: 1,
    });
    teamnameTl.to("#teamname", {
      y: 0,
      duration: 0.5,
      ease: "power4.out",
    });
    const usernameTl = gsap.timeline();

    usernameTl.to("#username", {
      x: 0,
      duration: 0.5,
      delay: 0.13,
      scale: 1,

      ease: "power4.out",
    });
    usernameTl.to("#username", {
      y: -50,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#games", {
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#credits", {
      x: 200,
      duration: 0.5,
      ease: "power4.out",
    });
  }

  return (
    <div
      className="w-screen h-screen flex flex-col absolute bg-black"
      ref={pageRef}
    >
      {/* <img
        src="/back.png"
        className="absolute opacity-30 w-screen h-screen object-cover"
      /> */}
      <video
        src="/back.mp4"
        autoPlay
        loop
        muted
        className="w-screen h-screen object-cover"
      />
      <div className="absolute flex top-0 bottom-0 items-center left-[170px] opacity-80">
        <img src="/japanese.png" alt="" className="w-[30vw]" id="japanese" />
      </div>
      <div
        className="font-thaust text-white absolute text-[9.7vw] flex items-center bottom-0 top-0 left-40 opacity-85  translate-y-[-50px] "
        id="username"
      >
        Thunder
      </div>
      <div
        className="absolute flex items-center bottom-0 top-0 left-[200px] opacity-85"
        id="teamname"
      >
        <p className="font-team text-white text-[7.2vw]  translate-y-[70px] ">
          IMPOSTERS
        </p>
      </div>
      <AvatarCanvas
        viewingStats={viewingStats}
        animationUrl={animationUrl}
        cameraDistance={2}
        avatarXPosition={1.4}
        avatarYPosition={-1}
        modelUrl={"https://models.readyplayer.me/678d5a50f2d97b1d4d6119d8.glb"}
      />
      <div className="flex absolute bottom-[25px] left-[50px] z-20 ">
        <div id="emote" className="cursor-pointer">
          <Emote
          key={1}
            width={"17px"}
            setAnimationUrl={() => {
              const animationUrl = "/drunk.fbx";
              setAnimationUrl(animationUrl);
            }}
          />
        </div>
        <div id="emote" className="cursor-pointer">
          <Emote
          key={2}
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/shout.fbx");
              console.log(animationUrl)
            }}
          />
        </div>
        <div id="emote" className="cursor-pointer">
          <Emote
          key={3}
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/fight.fbx");
            }}
          />
        </div>
        <div id="emote" className="cursor-pointer">
          <Emote
          key={4}
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/punch.fbx");
            }}
          />
        </div>
        <div id="emote" className="cursor-pointer">
          <Emote
          key={5}
            width={"17px"}
            setAnimationUrl={() => {
              setAnimationUrl("/punch.fbx");
            }}
          />
        </div>
      </div>
      <div
        className="flex absolute h-screen justify-evenly items-center top-0 bottom-0 right-7 opacity-80 z-50"
        id="icons"
      >
        <div className="flex flex-col h-[25vh] justify-evenly items-center">
          <img
            src="/share.png"
            alt=""
            className="w-[18px] h-[18px]"
            onClick={shareScreenshot}
          />
          <img src="/web.png" alt="" className="w-[18px] h-[18px]" onClick={()=>{
            window.open("https://www.mlsc.tech/")
          }}/>
          <img src="/instagram.png" alt="" className="w-[18px] h-[18px]" onClick={()=>{
            window.open("https://www.instagram.com/mlsc_db")
          }}/>
        </div>
      </div>
      <div
        className="absolute top-[110px] right-[100px] text-white font-thaust text-[20px] translate-x-[200px]"
        id="credits"
      >
        $400
      </div>
      <div
        className="absolute text-white font-alien text-[12px] -rotate-90 left-0 bottom-[200px] translate-x-[-17px] opacity-75"
        id="ip"
      >
        172.31.218.165
      </div>
      <div
        className="flex absolute bottom-[25px] left-0 right-0 justify-center"
        id="lorem"
      >
        <p className=" text-[#b3b3b3] flex justify-center font-thin text-[8px] w-[35vw] text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          placeat voluptatem, quasi dolorum reprehenderit consequatur ad
          provident error dolore maiores commodi mollitia cupiditate. Libero hic
          nulla minima quasi maxime quo praesentium fuga repellendus quia esse,
          molestias accusamus sapiente eius nobis?
        </p>
      </div>
      <div
        className="font-alien text-[#b3b3b3] absolute bottom-[25px] right-[50px] font-thin text-[10px] translate-x-[-17px]"
        id="copyright"
      >
        COPYRIGHT © 2024 RESERVED FOR <i className="text-white">MLSC</i>
      </div>
      <div id="games" className="opacity-0">
        <Games />
      </div>

      <StatsBorder viewingStats={viewingStats} />
    </div>
  );
};

export default Stats;
