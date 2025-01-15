'use client';
import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Vortex } from "@/components/ui/vortex";
import Navbar from "@/components/Landing";
import MainBottom from './mainBottom';

const Main = () => {
    const text = 'Align, Create, Evolve';
    return (
        <div>
            {/* Navbar */}
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="w-auto mx-auto mt-[5rem] sm:mt-[4rem] md:mt-[5rem] lg:mt-[6rem] rounded-md h-auto overflow-hidden px-4">
                <Vortex
                    backgroundColor="inherit"
                    className="flex flex-col items-center justify-center px-2 md:px-10 py-3 w-full h-full"
                    rangeY={800}
                    particleCount={1000}
                >
                    {/* Logos Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10">
                        {/* CSI Logo */}
                        <Image
                            src="/csi fcrit logo.png"
                            alt="CSI LOGO"
                            width={165}
                            height={165}
                            className="rounded-full w-20 sm:w-32 md:w-40 lg:w-44"
                        />
                        {/* Title */}
                        <h1
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left p-4"
                            style={{ fontFamily: 'var(--font-orbitron)' }}
                        >
                            CSI X AIDL <br />
                            Presents
                        </h1>
                        {/* AIDL Logo */}
                        <Image
                            src="/aidl_logo.png"
                            alt="AIDL LOGO"
                            width={175}
                            height={175}
                            className="rounded-full w-20 sm:w-32 md:w-40 lg:w-48"
                        />
                    </div>

                    {/* Main Heading */}
                    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto mt-6 z-20 py-6 px-4">
      <div className="relative flex items-baseline gap-2">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                     bg-clip-text text-transparent bg-gradient-to-b 
                     from-neutral-800 via-neutral-700 to-neutral-700 
                     dark:from-neutral-800 dark:via-white dark:to-white 
                     tracking-wider"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          HackQuinox
        </h1>
        <span
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                     bg-clip-text text-transparent bg-gradient-to-b 
                     from-neutral-800 via-neutral-700 to-neutral-700 
                     dark:from-neutral-800 dark:via-white dark:to-white
                     self-start"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          2025
        </span>
      </div>
    </div>

                    {/* Text Effect */}
                    <h2 
      className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                 text-center py-2 sm:py-3 md:py-4
                 tracking-wide leading-relaxed
                 px-4 mx-auto
                 max-w-screen-lg"
      style={{ fontFamily: 'var(--font-exo2)' }}
    >
      <TextGenerateEffect words={text} />
    </h2>

                    {/* Bottom Content */}
                    <MainBottom />
                </Vortex>
            </div>
        </div>
    );
};

export default Main;
