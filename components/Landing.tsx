"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center ">
      <div className="relative flex justify-between items-center w-full">
        <div className="m-3 inline-flex items-center">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="rounded-full" />
          <h1 className="text-4xl font text-white glow-on-hover ml-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
            HackQuinox
          </h1>
        </div>
        

<div className="m-3 fixed right-0 flex gap-2">
  <Link href="#home" passHref>
    <HoverBorderGradient
      containerClassName="rounded-full"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      Home
    </HoverBorderGradient>
  </Link>
  
  <Link href="#theme" passHref>
    <HoverBorderGradient
      containerClassName="rounded-full"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      Themes
    </HoverBorderGradient>
  </Link>
  
  <Link href="#timeline" passHref>
    <HoverBorderGradient
      containerClassName="rounded-full"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      Timeline
    </HoverBorderGradient>
  </Link>
  
  <Link href="#faq" passHref>
    <HoverBorderGradient
      containerClassName="rounded-full"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      FAQs
    </HoverBorderGradient>
  </Link>
  
  <Link href="#contact" passHref>
    <HoverBorderGradient
      containerClassName="rounded-full"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      Contact
    </HoverBorderGradient>
  </Link>
</div>

      </div>
    </div>
  );
};

export default Navbar;