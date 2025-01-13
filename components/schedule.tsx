

"use client";
import React from 'react';
import "./timeline.css";


const ScheduleCard: React.FC = () => {
  return (<>
    <div className="bg-darkBackground text-lightText min-h-screen  flex items-center justify-center">
    <div className="bg-animation">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="stars4"></div>
  </div>

      <div className="container mx-auto p-4 ">
  
        {/* Title */}
        
        {/* Schedule Grid */}
        <div className="grid grid-cols-2 gap-12 relative">
          
          {/* Left Side */}
          <div className="relative">
          

            {/* Image for Character 1 */}
            
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

          <style jsx>{`
            .font-Orbitron {
              font-family: 'Orbitron', sans-serif;
            }

          `}</style>

          
            
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

<style jsx>{`
  /* Apply Orbitron font */
  .font-Orbitron {
    font-family: 'Orbitron', sans-serif;
  }

  /* Hover effect */
  .hover\:scale-110:hover {
    transform: scale(1.1); /* Slight scale-up effect */
  }

  .hover\:text-pink-light:hover {
    color: #fce4f1; /* Very light pink color on hover */
  }

  .hover\:shadow-pink-light:hover {
    text-shadow: 0 0 10px rgba(249, 168, 212, 0.6); /* Very light pink glow effect */
  }
`}</style>

            
            <img
  src="/rocketr.png"
  alt="rocket"
  width={200}
  height={120}
  className="rocket absolute top-[-200px] left-[420px] transition-transform duration-300 hover:move-rotate"
/>

<style jsx>{`
  .rocket {
    transition: transform 0.3s ease-in-out;
  }

  /* Hover effect: Moves left-right and rotates */
  .rocket:hover {
    animation: moveAndRotate 0.6s infinite alternate ease-in-out;
  }

  @keyframes moveAndRotate {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    50% {
      transform: translateX(10px) rotate(10deg); /* Move right and rotate */
    }
    100% {
      transform: translateX(-10px) rotate(-10deg); /* Move left and rotate */
    }
  }
`}</style>

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

<style jsx>{`
  .rocket {
    transition: transform 0.3s ease-in-out; /* This ensures smooth scaling */
  }

  /* Hover effect: Moves left-right and rotates */
  .rocket:hover {
    animation: moveAndRotate 0.6s infinite alternate ease-in-out;
  }

  @keyframes moveAndRotate {
    0% {
      transform: translateX(0) rotate(0deg); /* No movement or rotation */
    }
    50% {
      transform: translateX(10px) rotate(10deg); /* Move right and rotate */
    }
    100% {
      transform: translateX(-10px) rotate(-10deg); /* Move left and rotate */
    }
  }
`}</style>


            
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


<style jsx>{`
  /* Keyframes for waving flag animation */
  @keyframes wavingFlag {
    0% {
      transform: rotate(-5deg) translateX(0) translateY(0); /* Starting position */
    }
    50% {
      transform: rotate(5deg) translateX(10px) translateY(-5px); /* Midpoint, more movement */
    }
    100% {
      transform: rotate(-5deg) translateX(0) translateY(0); /* Back to the starting position */
    }
  }

  /* Apply the waving animation to the flag */
  .animate-waving-flag {
    animation: wavingFlag 3s ease-in-out infinite; /* 3s duration, infinite loop */
  }

  /* Hover effect for scaling the flag */
  .hover\:scale-110:hover {
    transform: scale(1.1) rotate(-5deg) translateX(0) translateY(0); /* Slight scale-up on hover */
  }
`}</style>

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

<style jsx>{`
  .rocket {
    transition: transform 0.3s ease-in-out; /* Smooth transition */
  }

  /* Hover effect: Moves left-right and rotates */
  .rocket:hover {
    animation: moveAndRotate 0.6s infinite alternate ease-in-out;
  }

  @keyframes moveAndRotate {
    0% {
      transform: translateX(0) rotate(0deg); /* No movement or rotation */
    }
    50% {
      transform: translateX(10px) rotate(10deg); /* Move right and rotate */
    }
    100% {
      transform: translateX(-10px) rotate(-10deg); /* Move left and rotate */
    }
  }
`}</style>

            

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

<style jsx>{`
  /* Keyframes for waving flag animation */
  @keyframes wavingFlag {
    0% {
      transform: rotate(-5deg) translateX(0) translateY(0); /* Starting position */
    }
    50% {
      transform: rotate(3deg) translateX(10px) translateY(-5px); /* Midpoint, more movement */
    }
    100% {
      transform: rotate(-5deg) translateX(0) translateY(0); /* Back to the starting position */
    }
  }

  /* Apply the animation to the flag */
  .animate-waving-flag {
    animation: wavingFlag 2s ease-in-out infinite; /* 3s duration, infinite loop */
  }
`}</style>

            <img
              src="/arrow1.jpg"
              alt="Arrow 2"
              width={200}
              height={200}
              className="absolute top-[350px] left-[200px] transition-transform duration-300 hover:scale-110"
            />
            <p className="absolute top-[510px] left-[425px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-transform duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light">
              1   February<br />
              10 hour offline<br />
              coding round
            </p>
            <img
  src="/rocketr.png"
  alt="rocket"
  width={200}
  height={120}
  className="rocket absolute top-[275px] left-[420px] transition-transform duration-300"
/>



<style jsx>{`
  .rocket {
    transition: transform 0.3s ease-in-out; /* Smooth transition */
  }

  /* Hover effect: Moves left-right and rotates */
  .rocket:hover {
    animation: moveAndRotate 0.6s infinite alternate ease-in-out;
    transform: scale(1.1); /* Keep the scaling on hover */
  }

  @keyframes moveAndRotate {
    0% {
      transform: translateX(0) rotate(0deg); /* No movement or rotation */
    }
    50% {
      transform: translateX(10px) rotate(10deg); /* Move right and rotate */
    }
    100% {
      transform: translateX(-10px) rotate(-10deg); /* Move left and rotate */
    }
  }
`}</style>

            <img
              src="/arrow1.jpg"
              alt="Arrow 2"
              width={200}
              height={200}
              className="absolute top-[350px] left-[625px] transition-transform duration-300 hover:scale-110"
            />
            <p
              className="absolute top-[510px] left-[870px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-transform duration-300 hover:scale-110 hover:text-pink-light hover:shadow-pink-light"
            >
              <span>11:00 PM</span> <br />
              <span>1 February</span> <br />
              <span>Results Declared</span>
            </p>
            <img
  src="/rocketr.png"
  alt="rocket"
  width={200}
  height={120}
  className="rocket absolute top-[275px] left-[830px] transition-all duration-300"
/>

<style jsx>{`
  .rocket {
    transition: transform 0.3s ease-in-out; /* Smooth transition */
  }

  /* Hover effect: Moves left-right and rotates */
  .rocket:hover {
    animation: moveAndRotate 0.5s infinite alternate ease-in-out;
    transform: scale(1.1); /* Scale on hover */
  }

  @keyframes moveAndRotate {
    0% {
      transform: translateX(0) rotate(0deg); /* No movement or rotation */
    }
    50% {
      transform: translateX(20px) rotate(10deg); /* Move right and rotate */
    }
    100% {
      transform: translateX(-20px) rotate(-10deg); /* Move left and rotate */
    }
  }
`}</style>




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

          {/* Right Side */}
          <div className="relative">
            {/* Image for Character 2 */}
           
            
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
    </div>
    </>
  );
};

export default ScheduleCard;