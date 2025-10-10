"use client"

export default function Footer() {
return(
    <>
    <div className="w-full py-4 gap-y-2 relative bottom-0 bg-black flex flex-col justify-center items-center">
        <div className="space-x-2 flex items-center justify-center">
        <img src="/Logo.png" alt="logo" className="w-8" />
        <h1 className="text-[1.2rem] font-medium">V-Spring Dev</h1>
        </div>
        <div className="">
        <p className="text-xs text-sky-700">
        &copy; {new Date().getFullYear()} V-Spring Dev | All rights reserved.
      </p>
        </div>
    </div>
    </>
)
}