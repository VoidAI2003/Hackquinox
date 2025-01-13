import Image from "next/image";
import React from "react";
import LampHeader from "./ui/lamp";

export function About() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum odio eget nibh ornare, vitae ultrices odio mollis. Maecenas accumsan tristique lectus, eu porta magna consectetur sed.";

  return (
    <>
      <LampHeader 
        text="About HackQuinox 2025"
        lampColor="#A42A93"
      />
      <div 
        className="flex flex-col lg:flex-row text-base md:text-lg lg:text-3xl h-auto p-6 lg:p-10"
        style={{ fontFamily: 'var(--font-roboto)' }}
      >
        <div className="flex-1 lg:max-w-[50%]">
          <p className="text-justify py-4 md:py-6 lg:py-10 max-w-full md:max-w-[90%] lg:max-w-[80%]">
            {text} 
            {text}
            {text}
            {text}
            {text}
          </p>
        </div>
        <div className="flex-1 lg:max-w-[50%]">
          <Image 
            src="/GOG.png" 
            alt="About HackQuinox" 
            layout="responsive" 
            width={500} 
            height={400} 
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
