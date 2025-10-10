"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScrolled);

    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  return <>
    <div className={`w-full fixed top-0 z-40 px-4 py-2 bg-transparent ${scrolled ? "bg-white backdrop-blur-md duration-300 shadow-md textb" : "text-white"}`}>
      <div className="flex justify-between">
        {/* logo */}
        <Link href="/user/">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src="/Logo.png" alt="logo" />
            <span className={`font-bold text-[1.4rem] ${scrolled? "text-black" : "text-white" }`}>V-Spring Dev</span>
          </div>
        </Link>
        {/* menu */}
        <div className={`flex items-center gap-2 font-roboto ${scrolled ? "text-black" : "text-white"}`}>
          <Link href="/user/" className="transition-all transform hover:scale-90 duration-300">Home</Link>
          <Link href="/user/about" className="ml-4 transition-all transform hover:scale-90 duration-300">About</Link>
          <Link href="/user/contact" className="ml-4 transition-all transform hover:scale-90 duration-300">Contact</Link>
        </div>
      </div>
    </div>
  </>;
}
