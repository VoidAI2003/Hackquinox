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
        <div className="overflow-x-hidden">
            <div className="fixed top-0 z-50 w-full">
                <Navbar />
            </div>
            <div className="w-full mx-auto mt-[3rem] rounded-md h-[50rem]">
                <Vortex
                    backgroundColor="inherit"
                    className="flex items-center flex-col justify-center px-4 md:px-8 py-4 w-full h-full"
                    rangeY={800}
                    particleCount={1000}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <Image src="/csi fcrit logo.png" alt="CSI LOGO" width={165} height={165} className="rounded-full" />
                        <h1 className="text-4xl text-center p-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
                            CSI X AIDL <br />
                            Presents
                        </h1>
                        <Image src="/aidl_logo.png" alt="AIDL LOGO" width={175} height={175} className="rounded-full" />
                    </div>
                    <h1 className="text-9xl text-center p-10" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        HackQuinox
                    </h1>
                    <h2 className="text-5xl text-center py-4" style={{ fontFamily: 'var(--font-exo2)' }}>
                        <TextGenerateEffect words={text} />
                    </h2>
                    <MainBottom />
                </Vortex>
            </div>
        </div>
    );
};

export default Main;
