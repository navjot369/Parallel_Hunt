'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname} from 'next/navigation';
import { clsx } from 'clsx';


export default function Navbar({isLogin}) {
    const arr = [
        {name: "Home", url: "/"},
        {name: "About", url: "/"},
        {name: "Contact", url: "/"},
        {name: "Team", url: "/"},
    ]
    const pathname = usePathname();
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', () => {
        if(window.innerWidth > 690) setOpen(false);
      })});
    return(
    <div className="fixed top-0 left-0 right-0 bg-[#232323] z-50 backdrop-blur-xl bg-opacity-80">
        <div className="flex flex-row justify-between items-center py-3 px-8">
        <div className="text-white text-2xl font-bold">Parallel Hunt</div>
        <div className="hidden md:flex flex-row justify-center items-center h-full">
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">Home</Link>
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">About</Link>
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">Contact</Link>
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">Team</Link>
            {isLogin === ""? <Link href="/" className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500">Sign In</Link> : 
            <Link href="/" className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500">Profile</Link>}
        </div>
        <div className="flex items-center md:hidden">
        <button className="text-xl border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500" onClick={() => {setOpen(!isOpen)}}>{isOpen? <span>&#x78;</span>:<span>&#8801;</span>}</button>
        </div>
    </div>
    <div className="py-8 duration-300 transition-all">
    <div className="flex flex-col justify-center items-center h-full">
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">Home</Link>
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">About</Link>
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">Contact</Link>
            <Link href="/" className="text-[#eee] text-lg font-bold mx-4">Team</Link>
            {isLogin === ""? <Link href="/" className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500 my-3">Sign In</Link> : 
            <Link href="/" className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500 my-3">Profile</Link>}
        </div>
    </div>
    </div>);
}