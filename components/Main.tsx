'use client';
import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Vortex } from "@/components/ui/vortex";
import Navbar from "@/components/Landing";
import MainBottom from './mainBottom';
import { Cover } from './ui/cover';
import { Header } from './Header';
const Main = () => {
    const text = 'Align, Create, Evolve';
    return (
        <div>
            <div className='fixed top-0 w-full z-50'>
                <Navbar />
            </div>
            <div className="w-auto mx-auto mt-[3rem] rounded-md h-[50rem] overflow-hidden">
                <Vortex
                    backgroundColor="inherit"
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                    rangeY={800}
                    particleCount={1000}
                >
                    <div className="flex items-center justify-center space-x-4">

                    <Image 
                    src="/csi fcrit logo.png" 
                    alt="CSI LOGO" 
                    layout='intrinsic'
                    width={165} 
                    height={165} 
                    className='rounded-full w-24 sm:w-32 md:w-40 lg:w-44' />
                        <h1 className='text-2xl md:text-3xl lg:text-4xl  text-center p-4' 
                        style={{ fontFamily: 'var(--font-orbitron)' }}>
                            CSI X AIDL <br />
                            Presents
                        </h1>
                        <Image
                            src="/aidl_logo.png"
                            alt="AIDL LOGO"
                            layout="intrinsic" 
                            width={175}
                            height={175}
                            className="rounded-full w-24 sm:w-32 md:w-40 lg:w-48" // Responsive sizes for different screens
                        />
                        
                    </div>
                    {/* <h1 className='text-9xl text-center p-10 font-bold' style={{ fontFamily: 'var(--font-doto)' }}>

                        HackQuinox
                    </h1> */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl  max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700
                     dark:from-neutral-800 dark:via-white dark:to-white" style={{ fontFamily: 'var(--font-orbitron)' }}>
                          HackQuinox
                    </h1>
                    <h2 className='text-5xl text-white text-center py-4' style={{ fontFamily: 'var(--font-exo2)' }}>
                        <TextGenerateEffect words={text} />
                    </h2>
                    <MainBottom />
                </Vortex>
            </div>
        </div>
    )
}

export default Main;
