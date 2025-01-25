"use client";

import LampHeader from "./ui/lamp";
import PrizeRevealCard from "./ui/aurora-background";

export function Prizes() {
  return (
    <>
      {/* Wrapper with explicit spacing */}
      <div style={{ paddingTop: "750px" }}> {/* Adjust padding as needed */}
        <LampHeader 
          text="Prizes" 
          lampColor="#E9ECEF"
        />
      </div>

      {/* Main Content */}
      <div
        className="flex flex-col items-center gap-0"
        style={{
          marginTop: "-200px",
          width: "auto",
          height: "0px",
          padding: "0px",
        }}
      ></div>
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-4xl px-4 md:px-8">
          <PrizeRevealCard />
        </div>
      </div>
    </>
  );
}
