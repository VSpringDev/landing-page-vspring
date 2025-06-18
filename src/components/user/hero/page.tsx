"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  return <>
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/bg-2.jpg')] bg-cover bg-center bg-blend-overlay bg-black/70">
      <div className="flex flex-col w-[90%] h-[500px] shadow-lg overflow-hidden backdrop-blur-3xl  rounded-[50px] bg-black/35">
        <div className="flex-1 flex flex-col gap-3 items-center justify-center">
          <h1 className="text-transparent text-8xl font-bold bg-[url('/bg-2.jpg')] bg-cover bg-center bg-clip-text leading-[1.2]">Welcome to V-Spring Dev</h1>
          <p className="text-white text-lg text-center max-w-2xl">
            Let's build the future, one line of code at a time.
          </p>
        </div>
      </div>
    </div>
  </>;
}
