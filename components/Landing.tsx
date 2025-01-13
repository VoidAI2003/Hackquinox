"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { HoverBorderGradient2 } from './ui/advanceHBG';

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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="relative flex justify-between items-center w-full px-4" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}
      >
        <div className="m-3 inline-flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <h1 
            className="text-2xl md:text-4xl text-white glow-on-hover ml-4"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            HackQuinox
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex flex-row gap-2 md:gap-6">
            {['Home', 'Themes', 'Timeline', 'FAQs', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="h-full"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full h-full"
                  className="dark:bg-black bg-white text-black dark:text-white 
                    flex items-center justify-center h-full px-4 py-2"
                >
                  {item}
                </HoverBorderGradient>
              </Link>
            ))}
            <Link href="https://google.com">
              <HoverBorderGradient2
                containerClassName="rounded-full h-full"
                className="dark:bg-black bg-white text-black dark:text-white 
                  flex items-center justify-center h-full px-4 py-2"
                defaultColor="#ffcb05"
                hoverColor="#e74c3c"
              >
                Register Now !!
              </HoverBorderGradient2>
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          aria-label="Open menu"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeSidebar}
            />
            <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-200 ease-in-out">
              <div className="flex flex-col p-4">
                <button
                  onClick={closeSidebar}
                  className="self-end p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="flex flex-col gap-4 mt-4">
                  {['Home', 'Themes', 'Timeline', 'FAQs', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={closeSidebar}
                      className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      {item}
                    </Link>
                  ))}
                  <Link 
                    href="https://google.com"
                    onClick={closeSidebar}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-lg text-center"
                  >
                    Register Now !!
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;