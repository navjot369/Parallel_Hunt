'use client'
import HeroSec from "./ui/home/heroSec.jsx";
import ChooseSec from "./ui/home/chooseSec.jsx";
import SigninSec from "./ui/home/not-signed/signinSec.jsx";
import Navbar from "./util/navbar.jsx";
import { useState , useEffect } from "react";


export default function Home() {
  const [isLogin, setLogin ] = useState("");
  useEffect(() => {
    setLogin(localStorage.getItem("name"));
  });
  return(<div>
    <Navbar isLogin={isLogin}/>
    <HeroSec />
    {isLogin.length>0?
    <ChooseSec /> : <SigninSec />}
    <div className="w-full h-screen"></div>
    </div>
  );
}