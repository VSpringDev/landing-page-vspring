"use client"

import { BiLogoGmail } from "react-icons/bi";

export default function Floating () {
    return(
        <>
        <div className="fixed bottom-4 right-4 w-12 z-40 animate-ping bg-gradient-to-r from-blue-500 to-sky-400 rounded-full h-12"></div>
        <a  href="https://mail.google.com/mail/?view=cm&to=vspringd@gmail.com&su=Konsultasi Layanan&body="
        target="_blank"
        rel="noopener noreferrer"
        >
        <div title="Konsultasi Layanan" className="w-12 h-12 fixed bottom-4 right-4 flex justify-center items-center text-black text-[1.5rem] bg-white z-50  rounded-full hover:cursor-pointer">
            <BiLogoGmail />
        </div>
        </a>
        </>
    )
}