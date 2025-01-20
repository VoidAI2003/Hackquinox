"use client"
import React from 'react';
import "./timeline.css";
import LampHeader from './ui/lamp';

const ScheduleCard = () => {
  return (<>
    <LampHeader 
      text="Timeline"
      lampColor="#ECB86A"
    />
  <div id="schedule-section" className="bg-darkBackground text-lightText min-h-screen relative flex items-center justify-center">
      <div className="bg-animation absolute inset-0 overflow-hidden">
        <div id="stars" className="relative"></div>
        <div id="stars2" className="relative"></div>
        <div id="stars3" className="relative"></div>
        <div id="stars4" className="relative"></div>
      </div>

      <div className="container mx-auto p-4 relative z-10 w-full max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-12 relative">
            <div className="relative">
              <img
                src="/arrow.jpg"
                alt="Arrow 1"
                width="200"
                height="200"
                className="absolute top-[-100px] left-[200px] transition-transform duration-300 hover:scale-110"
              />

              <p className="absolute top-[10px] left-[-60px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light">
                14 to 28 January<br />
                Ideation Round<br />
                Begins
              </p>

              <img
                src="/arrow.jpg"
                alt="Arrow 1"
                width={200}
                height={200}
                className="absolute top-[-100px] left-[625px] transition-transform duration-300 hover:scale-110"
              />
              
              <p className="absolute top-[10px] left-[425px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light">
                29 January<br />
                Round 1 Result<br />
                Declaration
              </p>

              <img
                src="/rocketr.png"
                alt="rocket"
                width={200}
                height={120}
                className="rocket absolute top-[-200px] left-[420px] transition-transform duration-300 hover:move-rotate"
              />

              <img
                src="/arrow.jpg"
                alt="Arrow 1"
                width={200}
                height={200}
                className="absolute top-[-100px] left-[1050px] transition-transform duration-300 hover:scale-110"
              />
              
              <img
                src="/rocketr.png"
                alt="rocket"
                width={200}
                height={120}
                className="rocket absolute top-[-200px] left-[850px] transition-transform duration-300 hover:move-rotate"
              />

              <img
                src="/arrow.jpg"
                alt="Arrow 1"
                width={200}
                height={200}
                className="absolute top-[900px] left-[200px] transition-transform duration-300 hover:scale-110"
              />
              
              <p className="absolute top-[1000px] left-[425px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-transform duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light">
                2 February<br />
                Final Presentation<br />
                Round
              </p>

              <img
                src="/flagf.png"
                alt="flag"
                width={200}
                height={300}
                className="absolute top-[-190px] left-[-50px] transition-transform duration-300 hover:scale-110 animate-waving-flag"
              />

              <p className="absolute top-[10px] left-[850px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110 p-4 z-10 hover:text-pink-light hover:shadow-pink-light">
                30 & 31 January<br />
                Preparation<br />
                Time
              </p>

              <img
                src="/rocketr.png"
                alt="rocket"
                width="200"
                height="120"
                className="rocket absolute top-[780px] left-[420px] transition-transform duration-300"
              />

              <img
                src="/a3.jpg" 
                alt="Arrow 4"
                width={100}
                height={160}
                className="absolute top-[1px] left-[1190px] transition-transform duration-300 hover:scale-110"
              />

              <img
                src="/a3.jpg" 
                alt="Arrow 4"
                width={100}
                height={160}
                className="absolute top-[500px] left-[100px] transition-transform duration-300 hover:scale-110"
              />

              <img
                src="/arrow.jpg"
                alt="Arrow 1"
                width={200}
                height={200}
                className="absolute top-[900px] left-[625px] transition-transform duration-300 hover:scale-110"
              />
              
              <p className="absolute top-[1000px] left-[870px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-all duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light">
                2 February<br />
                Winners<br />
                Declared
              </p>

              <img
                src="/flagf.png"
                alt="flag"
                width={200}
                height={200}
                className="absolute top-[800px] left-[830px] transition-transform duration-300 animate-waving-flag"
              />

              <img
                src="/arrow1.jpg"
                alt="Arrow 2"
                width={200}
                height={200}
                className="absolute top-[350px] left-[200px] transition-transform duration-300 hover:scale-110"
              />
              
              <p className="absolute top-[510px] left-[425px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-transform duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light">
              <span>11:00 PM</span> <br />
                <span>1 February</span> <br />
                <span>Results Declared</span>
                </p>
              
              <img
                src="/rocketr.png"
                alt="rocket"
                width={200}
                height={120}
                className="rocket absolute top-[275px] left-[420px] transition-transform duration-300"
              />

              <img
                src="/arrow1.jpg"
                alt="Arrow 2"
                width={200}
                height={200}
                className="absolute top-[350px] left-[625px] transition-transform duration-300 hover:scale-110"
              />
              
              <p className="absolute top-[500px] left-[870px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-transform duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light">
              <p>
                </p>1 February<br />
                10 hour offline<br />
                coding round
              </p>
            
              <img
                src="/rocketr.png"
                alt="rocket"
                width={200}
                height={120}
                className="rocket absolute top-[275px] left-[830px] transition-all duration-300"
              />

              <img
                src="/arrow1.jpg"
                alt="Arrow 2"
                width={200}
                height={200}
                className="absolute top-[350px] left-[1050px] transition-transform duration-300 hover:scale-110"
              />

              <div className="space-y-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-neonPink w-10 h-10 rounded-full flex items-center justify-center text-darkBackground font-bold transition-transform duration-300 hover:scale-110">
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="space-y-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-neonBlue w-10 h-10 rounded-full flex items-center justify-center text-darkBackground font-bold transition-transform duration-300 hover:scale-110">
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex flex-col space-y-12 items-center">
            {/* Ideation Round */}
            <div className="relative flex flex-col items-center">
              <img
                src="/flagf.png"
                alt="flag"
                width={100}
                height={150}
                className="animate-waving-flag mb-4"
              />
              <p className="text-white font-Orbitron font-bold text-xl text-center leading-tight mb-4">
                14 to 28 January<br />
                Ideation Round<br />
                Begins
              </p>
              <img
                src="/rocketr.png"
                alt="rocket"
                width={100}
                height={60}
                className="rocket mt-4"
              />
            </div>

            {/* Round 1 Result */}
            <div className="relative flex flex-col items-center">
              <p className="text-white font-Orbitron font-bold text-xl text-center leading-tight mb-4">
                29 January<br />
                Round 1 Result<br />
                Declaration
              </p>
              <img
                src="/arrow.jpg"
                alt="Arrow"
                width={80}
                height={80}
                className="transform rotate-90 mt-4"
              />
            </div>

            {/* Rest of the mobile timeline items in the same pattern */}
            <div className="relative flex flex-col items-center">
              <p className="text-white font-Orbitron font-bold text-xl text-center leading-tight mb-4">
                30 & 31 January<br />
                Preparation<br />
                Time
              </p>
              <img
                src="/rocketr.png"
                alt="rocket"
                width={100}
                height={60}
                className="rocket mt-4"
              />
            </div>

            <div className="relative flex flex-col items-center">
              <p className="text-white font-Orbitron font-bold text-xl text-center leading-tight mb-4">
                1 February<br />
                10 hour offline<br />
                coding round
              </p>
              <img
                src="/arrow1.jpg"
                alt="Arrow"
                width={80}
                height={80}
                className="transform rotate-90 mt-4"
              />
            </div>

            <div className="relative flex flex-col items-center">
              <p className="text-white font-Orbitron font-bold text-xl text-center leading-tight mb-4">
                11:00 PM<br />
                1 February<br />
                Results Declared
              </p>
              <img
                src="/rocketr.png"
                alt="rocket"
                width={100}
                height={60}
                className="rocket mt-4"
              />
            </div>

            <div className="relative flex flex-col items-center">
              <p className="text-white font-Orbitron font-bold text-xl text-center leading-tight mb-4">
                2 February<br />
                Final Presentation<br />
                Round
              </p>
              <img
                src="/flagf.png"
                alt="flag"
                width={100}
                height={150}
                className="animate-waving-flag mt-4"
              />
            </div>

            <div className="relative flex flex-col items-center">
              <p className="text-white font-Orbitron font-bold text-xl text-center leading-tight">
                2 February<br />
                Winners<br />
                Declared
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .font-Orbitron {
        font-family: 'Orbitron', sans-serif;
      }

      .rocket {
        transition: transform 0.3s ease-in-out;
      }

      .rocket:hover {
        animation: moveAndRotate 0.6s infinite alternate ease-in-out;
      }

      @keyframes moveAndRotate {
        0% {
          transform: translateX(0) rotate(0deg);
        }
        100% {
          transform: translateX(10px) rotate(10deg);
        }
      }

      @keyframes wavingFlag {
        0% {
          transform: rotate(-5deg) translateX(0) translateY(0);
        }
        50% {
          transform: rotate(3deg) translateX(10px) translateY(-5px);
        }
        100% {
          transform: rotate(-5deg) translateX(0) translateY(0);
        }
      }

      .animate-waving-flag {
        animation: wavingFlag 2s ease-in-out infinite;
      }

      /* Background animation responsive styles */
      .bg-animation {
        position: absolute;
        width: 100%;
        overflow: hidden;
        z-index: 1;
      }

      /* Mobile height */
      @media (max-width: 768px) {
        .bg-animation {
          height: 100%;
        }
      }

      /* Desktop height */
      @media (min-width: 769px) {
        .bg-animation {
          height: 175%;
        }
      }
    `}</style>
  </>);
};

export default ScheduleCard;
