import Image from "next/image";
import React from "react";
import LampHeader from "./ui/lamp";
import AnimatedShinyText from "./textshineeffect";

export function About() {
  const text1 =
    "Welcome to HackQuinox 2025, an exciting offline hackathon hosted by Agnel Charities Fr. C. Rodrigues Institute of Technology, Navi Mumbai, in a collaborative effort between CSI-FCRIT and the AI & Deep Learning (AIDL) Club.";
  const text2 = "HackQuinox serves as a dynamic platform for students to channel their creativity, solve challenging problem statements, and present innovative solutions that address real-world issues. With domains spanning AI/ML, Web Development, Cybersecurity/Blockchain, and Open Innovation, participants will have the opportunity to bring their ideas to life, collaborate with like-minded peers, and gain invaluable insights from seasoned industry experts.";
  const text3 ="This hackathon is more than just a competition—it's a celebration of innovation, collaboration, and learning. Whether you're a seasoned coder or a budding innovator, HackQuinox 2025 promises to be an enriching experience that pushes the boundaries of technology and creativity.";
  const text4 ="So, gear up for an unforgettable journey of coding, creating, and collaborating at HackQuinox 2025. We can't wait to see what you'll build!";
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
            {text3}<br />
            {text4}
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
