import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./pages/Loading";
import Done from "./pages/Done";
import PageLoading from "./pages/PageLoading";
import CreateSquad from "./pages/CreateSquad";
import AddMembers from "./pages/AddMembers";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";

const CreateAvatar = lazy(() => import("./pages/CreateAvatar"));
const Stats = lazy(() => import("./pages/Stats"));
const Team = lazy(() => import("./pages/Team"));
const Shop = lazy(() => import("./pages/Shop"));

const App = () => {
  const [viewingStats, setViewingStats] = useState(false);
  const [viewingCart, setViewingCart] = useState(false);
  const [viewingRegister, setViewingRegister] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewNavbar, setViewnavbar] = useState(true);
  const [cardPage, setCardPage] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.pathname === "/shop") {
      setCardPage(true);
    } else {
      setCardPage(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const hiddenNavbarPaths = ["/createAvatar", "/register"];

    if (hiddenNavbarPaths.includes(location.pathname)) {
      setViewnavbar(false);
    } else {
      setViewnavbar(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token && (location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/addMembers" && location.pathname !== "/adminLogin")) {
      navigate("/login");
    }
  }, [location.pathname, navigate]);
  

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-0 p-0 box-border bg-[#101010]">
      {viewNavbar && (
        <Navbar
          cardPage={cardPage}
          setViewingCart={setViewingCart}
          setViewingStats={setViewingStats}
          viewingCart={viewingCart}
          viewingStats={viewingStats}
        />
      )}
      {viewNavbar && (
        <div className="w-screen h-[1px] bg-white absolute top-[72px] z-20 opacity-45"></div>
      )}
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Stats viewingStats={viewingStats} />} />
          <Route path="/createAvatar" element={<CreateAvatar />} />
          <Route
            path="/avatarCreated"
            element={<Done targetText={"YOUR AVATAR HAS BEEN CREATED"} />}
          />
          <Route path="/team" element={<Team />} />
          <Route path="/register" element={<CreateSquad />} />
          <Route path="/addMembers" element={<AddMembers />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route
            path="/shop"
            element={
              <Shop viewingCart={viewingCart} setViewingcart={setViewingCart} />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
