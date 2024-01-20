"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function Navbar() {
  const arr = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Team", url: "/team" },
  ];
  const [isLogin, setLogin] = useState("");
  useEffect(() => {
    setLogin(localStorage.getItem("name"));
  }, []);
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 690) setOpen(false);
    });
  });
  let handleLogout = () => {
    localStorage.removeItem("name");
    location.reload();
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#232323] z-40 backdrop-blur-xl bg-opacity-80">
      <div className="flex flex-row justify-between items-center py-3 px-8 z-50">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Parallel Hunt</Link>
        </div>
        <div className="hidden md:flex flex-row justify-center items-center h-full">
          <Link href="/" className="text-[#eee] text-lg font-bold mx-4">
            Home
          </Link>
          <Link
            href="/#about"
            scroll={true}
            className="text-[#eee] text-lg font-bold mx-4"
          >
            About
          </Link>
          <Link
            href="/#team"
            scroll={true}
            className="text-[#eee] text-lg font-bold mx-4"
          >
            Team
          </Link>
          <Link
            href="/#contact"
            scroll={true}
            className="text-[#eee] text-lg font-bold mx-4"
          >
            Contact
          </Link>
          {isLogin && isLogin.length > 0 ? (
            <button
              className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500"
              onClick={handleLogout}
            >
              Log out
            </button>
          ) : (
            <Link
              href="/login"
              className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500"
            >
              Log In
            </Link>
          )}
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="text-xl border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {isOpen ? <span>&#x78;</span> : <span>&#8801;</span>}
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "w-64 top-[64px] py-8 duration-500 transition-all bg-[#232323] backdrop-blur-xl bg-opacity-80 z-40 fixed h-screen",
          { "right-0": isOpen, "-right-96": !isOpen }
        )}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <Link href="/" className="text-[#eee] text-lg font-bold mx-4">
            Home
          </Link>
          <Link href="/" className="text-[#eee] text-lg font-bold mx-4">
            About
          </Link>
          <Link href="/" className="text-[#eee] text-lg font-bold mx-4">
            Contact
          </Link>
          <Link href="/" className="text-[#eee] text-lg font-bold mx-4">
            Team
          </Link>
          {isLogin === "" ? (
            <Link
              href="/login"
              className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500 my-3"
            >
              Sign In
            </Link>
          ) : (
            <Link
              href="/profile"
              className="text-lg border-2 mx-4 border-[#ae5eff] text-[#ae5eff] py-1 px-3 rounded-md shadow-[3px_3px_0_0_#ae5eff] hover:shadow-none duration-500 my-3"
            >
              Profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
