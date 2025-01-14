// AnimatedShinyText.tsx

import { type FC, type ReactNode } from "react";

// Define our component's props with TypeScript
interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

// Create a utility function to merge Tailwind classes
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

// Define our component with proper TypeScript typing
const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <div
      style={{
        // Define the custom property for shimmer width
        "--shiny-width": `${shimmerWidth}px`,
      } as React.CSSProperties}
      className={cn(
        // Base text styling
        "text-neutral-200/70 dark:text-neutral-100/70",
        
        // Animation properties
        "animate-[shine_8s_cubic-bezier(.6,.6,0,1)_infinite]",
        "bg-[length:var(--shiny-width)_100%]",
        "bg-no-repeat",
        "bg-[position:0_0]",
        
        // Shine gradient effect
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",
        "bg-clip-text",
        
        // Additional custom classes
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedShinyText;