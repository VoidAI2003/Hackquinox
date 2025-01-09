import Image from "next/image";
import React from "react";

export function About() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum odio eget nibh ornare, vitae ultrices odio mollis. Maecenas accumsan tristique lectus, eu porta magna consectetur sed.";
  return (
    <>
      <div className="relative inline-flex overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A42A93_0%,#E2CBFF_50%,#A42A93_100%)]" />
        <span className="inline-flex cursor-pointer items-center justify-center 
        rounded-xl bg-black px-6 py-5 text-6xl text-white backdrop-blur-3xl" style={{ fontFamily: 'var(--font-exo2)' }}>
          About HackQuinox
        </span>
      </div>
      <div className="flex flex-row text-3xl h-auto p-10" style={{ fontFamily: 'var(--font-roboto)' }}>
        <div className="flex-1 max-w-[50%]">
          <p className="text-justify py-10 max-w-[80%]">
            {text} 
            {text}
            {text}
            {text}
            {text}
          </p>
        </div>
        <div className="flex-1 max-w-[50%]">
          <Image src="/GOG.png" alt="About HackQuinox" layout="responsive" width={500} height={400} />
        </div>
      </div>
    </>
  );
}