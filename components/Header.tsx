"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
    text: string;
}

export function Header(props: HeaderProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            className="relative inline-flex overflow-hidden rounded-xl p-[1px] w-fit"
            animate={{
                background: isHovered 
                    ? "linear-gradient(to right, rgba(0,0,0,1), rgba(88,28,135,0.8), rgba(0,0,0,1))"
                    : "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.1), rgba(0,0,0,1))",
                boxShadow: isHovered 
                    ? "0 0 20px rgba(147,51,234,0.3), inset 0 0 15px rgba(147,51,234,0.2)"
                    : "none"
            }}
            transition={{ 
                duration: 0.8,
                ease: "easeInOut"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id="header"
        >
            {/* Stars Background */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-0.5 w-0.5 rounded-full bg-white"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Floating Planets */}
            <motion.div
                className="absolute h-3 w-3 rounded-full blur-[1px]"
                animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 0.5, 0.3],
                    backgroundColor: isHovered ? "rgba(244,114,182,0.6)" : "rgba(244,114,182,0.3)"
                }}
                transition={{
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    backgroundColor: {
                        duration: 0.8,
                        ease: "easeInOut"
                    }
                }}
                style={{ top: '20%', left: '10%' }}
            />
            <motion.div
                className="absolute h-4 w-4 rounded-full blur-[1px]"
                animate={{
                    y: [-7, 7, -7],
                    opacity: [0.3, 0.5, 0.3],
                    backgroundColor: isHovered ? "rgba(168,85,247,0.6)" : "rgba(168,85,247,0.3)"
                }}
                transition={{
                    y: {
                        duration: 4,
                        delay: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    backgroundColor: {
                        duration: 0.8,
                        ease: "easeInOut"
                    }
                }}
                style={{ bottom: '20%', right: '15%' }}
            />

            {/* Shooting Star */}
            <motion.div
                className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{
                    width: isHovered ? "40px" : "32px",
                    x: [-100, 400],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    width: {
                        duration: 0.8,
                        ease: "easeInOut"
                    },
                    x: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    opacity: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }}
                style={{ top: '30%', left: '0%' }}
            />

            {/* Content */}
            <motion.div 
                className="relative z-10 flex items-center gap-6 px-6 py-4"
                animate={{
                    gap: isHovered ? "24px" : "6px"
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <motion.span
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl text-6xl text-white whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-exo2)' }}
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                        textShadow: isHovered 
                            ? "0 0 15px rgba(147,51,234,0.5), 0 0 30px rgba(147,51,234,0.3)"
                            : "none"
                    }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                >
                    {props.text}
                </motion.span>
                
                <motion.div 
                    className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0"
                    animate={{
                        height: isHovered ? "28px" : "24px",
                        width: isHovered ? "28px" : "24px",
                        opacity: isHovered ? 0.85 : 0.5,
                        boxShadow: isHovered 
                            ? "0 0 15px rgba(147,51,234,0.5)"
                            : "none"
                    }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </motion.div>
    );
}