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
        name: "Power Up 1",
        price: 200,
        description: "Boosts attack speed by 10%",
        image: "/powerup/1",
      },
      {
        name: "Power Up 2",
        price: 300,
        description: "Enhances health regeneration by 15%",
        image: "/powerup/2",
      },
      {
        name: "Power Up 3",
        price: 400,
        description: "Increases defense by 20%",
        image: "/powerup/3",
      },
      {
        name: "Power Up 4",
        price: 250,
        description: "Improves stamina recovery by 25%",
        image: "/powerup/4",
      },
      {
        name: "Power Up 5",
        price: 350,
        description: "Boosts movement speed by 30%",
        image: "/powerup/5",
      },
      {
        name: "Power Up 6",
        price: 450,
        description: "Increases jump height by 35%",
        image: "/powerup/6",
      },
      {
        name: "Power Up 7",
        price: 500,
        description: "Enhances all stats by 40%",
        image: "/powerup/7",
      },
      {
        name: "Power Up 8",
        price: 600,
        description: "Unlocks all achievements",
        image: "/powerup/8",
      },
      {
        name: "Power Up 9",
        price: 700,
        description: "Grants invincibility for 10 seconds",
        image: "/powerup/9",
      },
      {
        name: "Power Up 10",
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
      console.log(res.data);
    } catch (error) {
      console.error("Error buying items:", error);
      
    }



    console.log("Bought items: ", boughtItems);
    console.log(currencyLeft)
  };

  useEffect(() => {
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
        <img
          src="/back.png"
          className="absolute opacity-30 w-screen h-screen object-cover"
        />
        <video
          src="/back.mp4"
          autoPlay
          loop
          muted
          className="w-screen h-screen object-cover"
        />

        {/* PowerUps */}
        <div className="w-[100vw] h-[100vh] absolute z-10 top-0 bottom-0 left-0 right-0 flex items-center justify-center" id="powerups">
          <div className="w-[70vw] h-[70vh] flex flex-wrap gap-6 justify-center items-center translate-y-8">
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
                  <div>
                    <h3 className="text-white text-lg font-semibold opacity-90 tracking-[2px] text-[15px]">
                      {powerUp.name}
                    </h3>
                    <p className="text-white text-[11px] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
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
