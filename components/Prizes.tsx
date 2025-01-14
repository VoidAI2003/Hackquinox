"use client";
import AnimatedShinyText from "./textshineeffect";
import LampHeader from "./ui/lamp";

export function Prizes() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="
        /* Mobile height - unchanged */
        min-h-[50vh]
        
        /* Tablet and up - reduced heights to prevent overlap */
        sm:min-h-[40vh]
        lg:min-h-[45vh]
        xl:min-h-[50vh]
        
        /* Ensure proper spacing from top content */
        mt-20
        lg:mt-64
        
        /* Maintain centering */
        w-full
        flex
        items-center 
        justify-center
      ">
        <LampHeader 
          text="Prizes" 
          lampColor="#E9ECEF" 
        />
      </div>
      
      <AnimatedShinyText
        className="
          font-bold
          text-center
          text-2xl
          sm:text-3xl
          lg:text-4xl
          mt-8
          mb-16
        "
        shimmerWidth={200}
      >
        Coming Soon ...
      </AnimatedShinyText>
    </div>
  );
}

export default Prizes;