'use client'
import GlowCont from "../util/glowCont";
import Link from 'next/link';
import axios from "axios";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [resp, setResp] = useState("");
    const router = useRouter();
    const handleEmailChange = (event) => {
        setResp("");
        setEmail(event.target.value);
    }
    const handlepasswordChange = (event) => {
        setResp("");
        setpassword(event.target.value);
    }
    function handleClick() {
        axios.post('https://parallel-hunt-backend-1.onrender.com/login', {
            Email : Email,
            password : password
        })
        .then(function(response) {
            if(response.data.msg) {
                localStorage.setItem("email", Email);
                localStorage.setItem("name", response.data.name);
                router.push("/");
            }
            else{
                setResp("Invalid Credentails");
            }
        })
    }
    return(<div className="w-full h-screen min-h-96 flex justify-center items-center">
        <GlowCont>
        <div className="bg-white w-96 p-1 px-4">
            <h1 className="text-4xl text-center mt-11 mb-4 font-bold bg-clip-text bg-glowback text-transparent">Parallel Hunt</h1>
            <form action="" >
                <p className="text-center text-red-600">{resp}</p>
                <label className="font-bold text-lg pl-4 text-gray-800 pt-4 block" for="user_mail">E-mail</label>
                <input className="w-full border-solid border-gray-700 border-2 rounded-full h-11 p-2 outline-none" id="user_name" onChange={handleEmailChange} type="text" name="Email" />
                <label className="font-bold text-lg pl-4 text-gray-800 pt-4 block" for="user_pass">Password</label>
                <input className="w-full border-solid border-gray-700 border-2 rounded-full h-11 p-2" id="user_pass" type="password" name="password" onChange={handlepasswordChange}/>
                <button className="bg-[#ff5bac] w-full font-bold rounded-full my-6 hover:bg-glowback transition-colors duration-500 block text-white text-lg p-2" type="button" onClick={handleClick}>Log in</button>
            </form>
            <div className="w-full bg-slate-900 h-0.5 rounded-full"></div>
            <h3 className="text-gray-700 font-bold text-center my-4">Don't have account?<Link href="/signup" className="text-blue-600"> Sign Up</Link></h3>
        </div>
        </GlowCont>
    </div>);

}
/*
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  */