import Image from "next/image";
import React from "react";
import LampHeader from "./ui/lamp";
import AnimatedShinyText from "./textshineeffect";

export function About() {
  const text1 =
    "Welcome to HackQuinox 2025, an offline hackathon hosted by Agnel Charities Fr. C. Rodrigues Institute of Technology, Navi Mumbai, in collaboration with CSI-FCRIT and the AI & Deep Learning Club.  ";
  const text2 = "HackQuinox is a vibrant platform for students to unleash creativity, tackle real-world challenges, and present innovative solutions. With domains like AI/ML, Web Development, Cybersecurity/Blockchain, and Open Innovation, participants will collaborate, innovate, and learn from industry experts.";
  const text3 ="Whether you're a seasoned coder or a budding innovator, HackQuinox 2025 is your chance to push boundaries, connect with peers, and create impactful projects. Let's code, create, and collaborate!";
  
  return (
    <>
      <LampHeader 
        text="About HackQuinox 2025"
        lampColor="#A42A93"
      />
      <div 
        className="flex flex-col lg:flex-row text-2xl md:text-3xl lg:text-4xl h-auto p-6 lg:p-10"
        style={{ fontFamily: 'var(--font-iceland)' }}
      >
        <div className="flex-1 lg:max-w-[50%]">
          <AnimatedShinyText shimmerWidth={100}>
          <h2 className="text-justify py-4 md:py-6 lg:py-10 max-w-full md:max-w-[90%] lg:max-w-[80%]">
           {text1} <br />
            {text2}<br />
            {text3}
          </h2>
          </AnimatedShinyText>
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
