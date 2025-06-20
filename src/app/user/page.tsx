"use client"
import Hero from "@/components/user/hero/page"
import About from "@/components/user/about/page"

export default function User() {
  
    return (
       <>
         <div className="flex flex-col min-h-screen">
            <Hero />
            <About />
         </div>
       </>
    )
}