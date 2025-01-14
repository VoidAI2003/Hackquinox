"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Navbar = () => {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacity = 0.75;
      const newOpacity = Math.min(scrollTop / 400, maxOpacity);
      setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative flex justify-between items-center" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}>
      <div className="relative flex justify-between items-center w-full">
        <div className="m-3 inline-flex items-center">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="rounded-full" layout='responsive' />
          <h1 className="text-4xl font text-white glow-on-hover ml-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
            HackQuinox
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex items-center m-3">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-white dark:bg-black text-black dark:text-white rounded-full focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          ></div>
        )}

        {/* Sidebar Menu */}
        <div className={`fixed top-0 right-0 h-full bg-white dark:bg-black z-50 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} sm:translate-x-0 sm:flex sm:flex-row sm:relative sm:h-auto sm:bg-transparent`}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 p-4 sm:p-0">
            {/* Close Button for Sidebar */}
            <button
              onClick={closeSidebar}
              className="self-end sm:hidden p-2 bg-white dark:bg-black text-black dark:text-white rounded-full mb-4 focus:outline-none"
            >
              {/* Close Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {['Home', 'Themes', 'Timeline', 'FAQs', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="h-full"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full h-full"
                  className="dark:bg-black bg-white text-black dark:text-white 
                    flex items-center justify-center h-full px-6 py-2.5 sm:py-2.5
                    "
                >
                  {item}
                </HoverBorderGradient>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
