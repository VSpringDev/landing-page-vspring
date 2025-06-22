"use client";
import Hero from "@/components/user/hero/page";
import About from "@/components/user/about/page";
import Services from "@/components/user/services/page";
import Project from "@/components/user/project/Page";

export default function User() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Services />
        <Project />
      </div>
    </>
  );
}
