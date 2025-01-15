"use client";
import AnimatedShinyText from "./textshineeffect";
import LampHeader from "./ui/lamp";

export function Prizes() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="
        /* Mobile height - significantly reduced */
        min-h-[30vh]
        
        /* Tablet and up - minimal heights to prevent overlap */
        sm:min-h-[25vh]
        lg:min-h-[30vh]
        xl:min-h-[35vh]
        
        /* Much larger top margins */
        mt-40
        lg:mt-72
        xl:mt-96
        
        /* Maintain centering */
        w-full
        flex
        items-center 
        justify-center
        relative
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
          mt-16
          mb-32
        "
        shimmerWidth={200}
      >
        Coming Soon ...
      </AnimatedShinyText>
    </div>
  );
}

export default Prizes;