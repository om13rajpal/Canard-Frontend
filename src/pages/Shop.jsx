import axios from "axios";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Shop = ({ viewingCart, setViewingcart }) => {
  const [cart, setCart] = useState([]);
  const [currencyLeft, setCurrencyLeft] = useState(5000);
  const [creditCard, setCreditCard] = useState("");
  const [boughtItems, setBoughtItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const token = localStorage.getItem("token");
  const teamId = localStorage.getItem("teamId");

  const powerUps = [
    {
      name: "TIME DECREE I",
      price: 200,
      description: "Add or decrease 2 minutes from your time",
      image: "/powerup/1",
    },
    {
      name: "TIME DECREE II",
      price: 300,
      description: "Add or decrease 4 minutes from your time",
      image: "/powerup/2",
    },
    {
      name: "FORCED FATE",
      price: 400,
      description: "Any other team will have to perform a minor task once again",
      image: "/powerup/3",
    },
    {
      name: "BREACH'EM",
      price: 250,
      description: "View any team's progress",
      image: "/powerup/4",
    },
    {
      name: "WHITE FLAG",
      price: 350,
      description: "Skip a major task and mark it completed with a fixed time of 5 minutes",
      image: "/powerup/5",
    },
    {
      name: "REVERSE ASPIRIN I",
      price: 450,
      description: "Skip a minor task but reduce HP of left hand and right hand",
      image: "/powerup/6",
    },
    {
      name: "REVERSE ASPIRIN II",
      price: 500,
      description: "Decrease the HP of left hand and right hand by 100",
      image: "/powerup/7",
    },
    {
      name: "MYSTERIO",
      price: 600,
      description: "Gain a random power-up",
      image: "/powerup/8",
    },
    {
      name: "GOBLIN",
      price: 700,
      description: "Steal any other team's power-up",
      image: "/powerup/9",
    },
    {
      name: "POWER UP 10",
      price: 800,
      description: "Grants unlimited ammo for 15 seconds",
      image: "/powerup/10",
    },
  ];  

  const handleAddToCart = (powerUp) => {
    if (boughtItems.includes(powerUp.name)) {
      setPopupMessage(`${powerUp.name.toUpperCase()} HAS ALREADY BEEN PURCHASED!`);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      return;
    }
    if (!cart.find((item) => item.name === powerUp.name)) {
      setCart((prev) => [...prev, powerUp]);
    }
  };

  const handleBuy = async() => {
    
    try {
      const res=await axios.patch(`https://api.mlsc.tech/team/${teamId}/powerups`,{
        powerups: boughtItems,
        creditCard: creditCard,
        totalCost: totalCost
      } ,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      if(res.data.status===true){

        const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
        
        if (totalCost <= currencyLeft) {
          setCurrencyLeft((prev) => prev - totalCost);
          setBoughtItems((prev) => [...prev, ...cart.map((item) => item.name)]);
          setCart([]);
        }
        
        setCreditCard("");
        setPopupMessage("PURCHASE SUCCESSFUL!");
        setShowPopup(true);
        
        const boughtItems = cart.map((item) => powerUps.findIndex((powerUp) => powerUp.name === item.name));
        console.log(boughtItems);
        console.log(res.data);
      }
    } catch (error) {
      setPopupMessage(error.response.data.message.toUpperCase());
      console.error("Error buying items:", error);
      
    }



    console.log("Bought items: ", boughtItems);
    console.log(currencyLeft)
  };

  useEffect(() => {

    gsap.to("#powerups", {
      y: 20,
      duration: 1,
      yoyo: true,
      ease: "power1.inOut",
      repeat: -1,
    })
    if (viewingCart) {
      gsap.to("#cart", {
        x: 0,
        duration: 0.5,
        ease: "power4.out",
      });

      gsap.from("#items", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.2,
      })
    } else {
      gsap.to("#cart", {
        x: 400,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [viewingCart, cart]);

  return (
    <>
      {/* Background */}
      <div className="w-screen h-screen flex flex-col absolute bg-black">
        <video
          src="/back.mp4"
          autoPlay
          loop
          muted
          className="w-screen h-screen object-cover"
        />

        {/* PowerUps */}
        <div className="w-[100vw] h-[100vh] absolute z-10 top-0 bottom-0 left-0 right-0 flex items-center justify-center" id="powerups">
          <div className="w-[80vw] h-[80vh] flex flex-wrap gap-6 justify-center items-center translate-y-8">
            {powerUps.map((powerUp, index) => (
              <div
                key={index}
                className={`relative h-[200px] w-[192px] rounded-lg group overflow-hidden ${
                  boughtItems.includes(powerUp.name) ? "opacity-50" : ""
                }`}
              >
                {/* Image with hover effect */}
                <div
                  className="absolute inset-0 transition-all duration-300 opacity-80"
                  style={{
                    backgroundImage: `url(${powerUp.image}.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300"></div>
                </div>

                {/* Name, description, and price */}
                <div className="relative z-10 p-4 h-full flex flex-col justify-between rounded-xl transition-transform duration-300 group-hover:scale-105 font-alien">
                  <div className="flex flex-col justify-evenly items-center h-full">
                    <h3 className="text-white text-lg font-semibold opacity-90 tracking-[2px] text-[15px]">
                      {powerUp.name}
                    </h3>
                    <p className="text-white text-center text-[11px] opacity-0 group-hover:opacity-100 transition-opacity font-sans mt-4">
                      {powerUp.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white text-[15px] font-mono font-semibold tracking-[1.5px]">
                      ${powerUp.price}
                    </h4>
                    <button
                      className="mt-2 bg-[#ffffffcf] text-black px-2 py-1 rounded hover:bg-[#3d6eff] transition font-sans text-[12px]"
                      onClick={() => handleAddToCart(powerUp)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="fixed top-0 right-0 translate-x-[400px] h-full w-[400px] bg-[#0e0e0e] text-white z-30 overflow-auto rounded-s-lg rounded-r-lg border-[#bbbbbb]"
        id="cart"
      >
        <img
          className="w-[13px] absolute left-4 top-4"
          onClick={() => setViewingcart(!viewingCart)}
          src="/close.png"
        ></img>
        <img className="w-[400px]" src="/cart.gif"></img>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="my-5 px-4" id="items">
              <div className="flex justify-between items-center font-sans border-b-[1px] pb-3 opacity-70">
                <img src={`${item.image}.jpg`} alt="" className="w-[30px] rounded-md"/>
                <h3 className="text-[14px]">{item.name}</h3>
                <div className="flex gap-3 items-center">

                <p className="text-[14px]">{item.price}m</p>
                <img src={`/delete.png`} alt="" className="w-[15px] rounded-md opacity-70" onClick={()=>{
                  setCart(cart.filter((cartItem) => cartItem.name !== item.name))
                }}/>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="text-[15px] my-8 px-4 font-alien tracking-[1.2px] opacity-70">
          TOTAL: ${cart.reduce((acc, item) => acc + item.price, 0)}
        </h3>
        <div className="mt-5 px-4">
          <label htmlFor="creditCard" className="text-[15px] opacity-70">
            Enter Credit Card:
          </label>
          <input
            id="creditCard"
            type="text"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
            maxLength={16}
            className="w-full my-1 p-2 text-black rounded-lg opacity-70"
            placeholder="Enter your mlsc tag"
          />
        </div>
        <button
          className="mt-2 bg-[#ffffffcf] text-black px-4 py-1 rounded hover:bg-[#3d6eff] transition font-sans text-[12px] ml-[16px] mb-5"
          onClick={handleBuy}
        >
          BUY
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#c0c0c0] p-10 rounded-lg shadow-lg text-center">
            <h3 className="text-[16px] font-alien tracking-[2px] mb-4">{popupMessage}</h3>
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
};

export default Shop;
