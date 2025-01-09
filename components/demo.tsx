'use client';

import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function VortexDemoSecond() {
  return (<>
    
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        rangeY={800}
        particleCount={10}
        baseHue={120}
      >
      </Vortex>
    </div>
    </>
  );
}
