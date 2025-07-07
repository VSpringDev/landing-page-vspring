"use client"

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/bg-2.jpg')] bg-cover bg-center bg-blend-overlay bg-black/70">
      <div className="flex flex-col w-[90%] h-[500px] shadow-lg overflow-hidden backdrop-blur-3xl rounded-[50px] bg-black/35">
        <div className="flex-1 flex flex-col gap-3 items-center justify-center">
          <h1 className="text-transparent text-8xl font-bold bg-[url('/bg-2.jpg')] bg-cover bg-center bg-clip-text leading-[1.2]">Projects</h1>
          <p className="text-white text-lg text-center max-w-2xl">
            Here you can showcase your projects and achievements.
          </p>
        </div>
      </div>
    </div>
  );
}