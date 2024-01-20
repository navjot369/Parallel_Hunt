'use client'
import HeroSec from "./ui/home/heroSec.jsx";
import ChooseSec from "./ui/home/chooseSec.jsx";
import SigninSec from "./ui/home/not-signed/signinSec.jsx";
import Navbar from "./util/navbar.jsx";
import { useState , useEffect } from "react";
import AboutSec from './ui/home/about.jsx';
import TeamSec from './ui/home/teamSec.jsx';
import ContactUs from './ui/home/contactSec.jsx';
import Footer from './util/footer.jsx';


export default function Home() {
  const [isLogin, setLogin ] = useState("");
  useEffect(() => {
    setLogin(localStorage.getItem("name"));
  });
  return(<div>
    <Navbar isLogin={isLogin}/>
    <HeroSec />
    {isLogin && isLogin.length>0?
    <ChooseSec /> : <SigninSec />}
    <AboutSec />
    <TeamSec />
    <ContactUs />
    <Footer />
    </div>
  );
}