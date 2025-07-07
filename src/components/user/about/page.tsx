"use client";

export default function About() {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* <div className="w-[90%] h-[70%]  bg-black/30 rounded-br-[100px] rounded-tl-[100px] shadow-lg flex items-center justify-center gap-3 z-10 overflow-hidden relative">
        <div className="absolute left-1/2 -translate-x-1/2  bottom-[-350px] flex items-center justify-center w-[700px] h-[700px] bg-gray-300 rounded-full">
          <div className="w-[600px] h-[600px] bg-gray-200 rounded-full shadow-lg flex items-center justify-center">
            <div className="w-[400px] h-[400px] bg-gray-100 rounded-full shadow-lg flex items-center justify-center"></div>
          </div>
        </div>
      </div> */}

      <div className="w-[90%] h-[70%]  bg-black/30 rounded-br-[100px] rounded-tl-[100px] shadow-lg flex items-center justify-center gap-3 z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src="/Logo.png" alt="" className="w-60 h-60" />
        </div>
        <div className="flex-1 p-8 flex flex-col items-center justify-center max-w-[600px] z-10">
          <h1 className="text-white text-4xl font-bold mb-4">About V-Spring Dev</h1>
          <p className="text-white text-lg text-center">
            V-Spring Dev is a platform dedicated to empowering developers with the tools and resources they need to build innovative applications. Our mission is to create a vibrant community where developers can learn, share, and collaborate on projects that push the boundaries of technology.
          </p>
        </div>
      </div>

    </div>
  );
}