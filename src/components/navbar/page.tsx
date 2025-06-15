"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            const offset = window.scrollY;
            setScrolled(offset > 0 );
        };

        window.addEventListener("scroll", handleScrolled);

        return () => window.removeEventListener("scroll", handleScrolled);
    }, [])

return(
    <>
        <div className={`w-full fixed top-0 z-10 px-4 py-2 bg-transparent ${scrolled ? "bg-transparent backdrop-blur-md duration-300 shadow-md" : ""}`}>
            <div className="flex justify-between">
                {/* logo */}
                <Link href="/user/hero">
                <div className="flex items-center gap-4">
                    <img className="w-10 h-10" src="/logo.png" alt="logo" />
                    <span className="text-black font-bold text-[1.4rem]">V-Spring Dev</span>
                </div>
                </Link>
                {/* menu */}
                <div className=""></div>
            </div>
        </div>
    </>
)
}