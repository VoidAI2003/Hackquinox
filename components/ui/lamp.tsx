"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Star Component: Renders individual stars with glowing animation
// isGlowing: Controls whether the star is in glowing state
// delay: Animation delay for staggered effect
const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{ scale: 1 }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1, // Multi-step scale animation for glowing effect
        background: isGlowing ? "#fff" : "#666", // Color change on glow
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className="bg-[#666] h-[1px] w-[1px] rounded-full relative z-20"
    />
  );
};

// Glow Component: Creates a blue halo effect around glowing stars
// delay: Animation delay for synchronized glow effect
const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{ opacity: 0 }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full
       bg-blue-500 blur-[1px] shadow-5xl shadow-blue-400"
    />
  );
};

// StarField Component: Creates a grid of animated stars with random glowing effects
const StarField = () => {
  const stars = 110; // Total number of stars
  const columns = 10; // Grid columns for star layout
  const [glowingStars, setGlowingStars] = useState<number[]>([]); // Tracks which stars are glowing
  const [mouseEnter, setMouseEnter] = useState(false); // Handles hover state
  const highlightedStars = useRef<number[]>([]); // Refs for managing star state between renders

  // Effect: Randomly selects new stars to glow every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className="absolute inset-0 z-10"
    >
      {/* Grid container for stars */}
      <div
        className="h-full w-full"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `1px`,
        }}
      >
        {[...Array(stars)].map((_, starIdx) => {
          const isGlowing = glowingStars.includes(starIdx);
          const delay = (starIdx % 10) * 0.1; // Staggered animation delay
          const staticDelay = starIdx * 0.01; // Hover state animation delay
          return (
            <div
              key={`star-${starIdx}`}
              className="relative flex items-center justify-center"
            >
              <Star
                isGlowing={mouseEnter ? true : isGlowing}
                delay={mouseEnter ? staticDelay : delay}
              />
              {mouseEnter && <Glow delay={staticDelay} />}
              <AnimatePresence mode="wait">
                {isGlowing && <Glow delay={delay} />}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// LampHeader Component: Creates a header with animated lamp light effect and starry background
// Props:
// - text: Header text content (supports line breaks with \n)
// - className: Additional CSS classes
// - height: Container height (default: min-h-screen)
// - bgColor: Background color (default: black)
// - lampColor: Color of the lamp light effect
export const LampHeader = ({
  text,
  className,
  height = "min-h-screen",
  bgColor = "bg-black",
  lampColor = "#22d3ee"
}: {
  text: string;
  className?: string;
  height?: string;
  bgColor?: string;
  lampColor?: string;
}) => {
  const textLines = text.split('\n');

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        height,
        bgColor,
        className
      )}
      style={{"--lamp-color": lampColor} as React.CSSProperties}
    >
      {/* Animated starry background */}
      <StarField />

      {/* Lamp light effect container */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-20">
        {/* Left cone of light */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, var(--lamp-color), transparent, transparent)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] text-white"
        >
          {/* Gradient masks for smooth light falloff */}
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone of light */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, var(--lamp-color))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          {/* Gradient masks for smooth light falloff */}
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Light effect embellishments */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        
        {/* Central glow effects */}
        <div 
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{ backgroundColor: 'var(--lamp-color)' }}
        ></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
          style={{ backgroundColor: 'var(--lamp-color)' }}
        ></motion.div>

        {/* Lamp fixture line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]"
          style={{ backgroundColor: 'var(--lamp-color)' }}
        ></motion.div>

        {/* Top shadow */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
      </div>

      {/* Header text container */}
      <div className="relative z-50 flex -translate-y-80 flex-col w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center text-4xl font-medium tracking-tight text-white md:text-7xl"
        >
          {textLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < textLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default LampHeader;