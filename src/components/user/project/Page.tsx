"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


function Card({ title, description, img, link }: { title: string, description: string, img: string, link: string }) {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg mb-6">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
        View Project
      </a>
    </div>
  );
    
}
export default function project() {
  return (
    <>
      <div className="mx-auto w-full px-[50px] py-10">
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold mb-4 text-center">
            Project
          </h1>
          <p className="text-gray-700 text-sm max-w-2xl mx-auto">
            This is a project page. You can add your project details here. You
            can also add links to your project repository, documentation, and
            other resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          <Card
            title="V-Spring Dev"
            description="A platform dedicated to empowering developers with the tools and resources they need to build innovative applications."
            img="/bg-2.jpg"
            link="https://v-spring-dev.vercel.app/"
          />

          <Card
            title="V-Spring Dev"
            description="A platform dedicated to empowering developers with the tools and resources they need to build innovative applications."
            img="/bg-2.jpg"
            link="https://v-spring-dev.vercel.app/"
          />

          <Card
            title="V-Spring Dev"
            description="A platform dedicated to empowering developers with the tools and resources they need to build innovative applications."
            img="/bg-2.jpg"
            link="https://v-spring-dev.vercel.app/"
          />

          <Card
            title="V-Spring Dev"
            description="A platform dedicated to empowering developers with the tools and resources they need to build innovative applications."
            img="/bg-2.jpg"
            link="https://v-spring-dev.vercel.app/"
          />

          <Card
            title="V-Spring Dev"
            description="A platform dedicated to empowering developers with the tools and resources they need to build innovative applications."
            img="/bg-2.jpg"
            link="https://v-spring-dev.vercel.app/"
          />

          <Card
            title="V-Spring Dev"
            description="A platform dedicated to empowering developers with the tools and resources they need to build innovative applications."
            img="/bg-2.jpg"
            link="https://v-spring-dev.vercel.app/"
          />

          <Card
            title="V-Spring Dev"
            description="A platform dedicated to empowering developers with the tools and resources they need to build innovative applications."
            img="/bg-2.jpg"
            link="https://v-spring-dev.vercel.app/"
          />

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-2">Showing More Projects</h2>
            <p className="text-gray-700 mb-4">
                Click the button below to view more projects and learn about the
                latest developments in our community.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.location.href = "/user/project"}
              >
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
