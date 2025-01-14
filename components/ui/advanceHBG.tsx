import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

// Extending the props interface to include our new customization options
interface HoverBorderGradientProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  // New customization props
  defaultColor?: string;
  hoverColor?: string;
  fontFamily?: string;
  gradientIntensity?: number;
  blurIntensity?: number;
  // Optional gradient stops for more color control
  defaultColorStop?: number;
  hoverColorStop?: number;
}

export function HoverBorderGradient2({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  // Default values for new customization props
  defaultColor = "#6D49C3",
  hoverColor = "#FF0081",
  fontFamily = "var(--font-space-mono)",
  gradientIntensity = 75,
  blurIntensity = 9,
  defaultColorStop = 90,
  hoverColorStop = 90,
  ...props
}: React.PropsWithChildren<HoverBorderGradientProps>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  // Helper function to create gradient strings with custom colors and stops
  const createGradient = (color: string, direction: Direction, colorStop: number) => {
    const positions = {
      TOP: "50% 0%",
      LEFT: "0% 50%",
      BOTTOM: "50% 100%",
      RIGHT: "100% 50%",
    };

    return `radial-gradient(100% 70% at ${positions[direction]}, ${color} ${gradientIntensity}%, rgba(128, 255, 219, 0) ${colorStop}%)`;
  };

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Using the helper function to create gradients with custom colors
  const movingMap: Record<Direction, string> = {
    TOP: createGradient(defaultColor, "TOP", defaultColorStop),
    LEFT: createGradient(defaultColor, "LEFT", defaultColorStop),
    BOTTOM: createGradient(defaultColor, "BOTTOM", defaultColorStop),
    RIGHT: createGradient(defaultColor, "RIGHT", defaultColorStop),
  };

  const highlight = `radial-gradient(100% 200% at 50% 50%, ${hoverColor} 10%, rgba(250, 25, 139, 0) ${hoverColorStop}%)`;

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 700);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto z-10 text-xl px-6 py-2 rounded-[inherit]",
          className
        )}
        style={{ fontFamily }}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: `blur(${blurIntensity}px)`,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}