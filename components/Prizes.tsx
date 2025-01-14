"use client";
import AnimatedShinyText from "./textshineeffect";
import LampHeader from "./ui/lamp";

export function Prizes() {
  return (
    <>
      <div style={{ height: "1500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LampHeader 
          text="Prizes" 
          lampColor="#E9ECEF" 
        />
      </div>
      <AnimatedShinyText
        className="text-4xl text-center font-bold"
        shimmerWidth={200}
      >
        Coming Soon ...
      </AnimatedShinyText>
    </>
  );
}