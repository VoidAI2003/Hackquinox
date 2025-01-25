import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

// Types
interface StarProps {
  isGlowing: boolean;
  delay: number;
  isHovered: boolean;
}

interface GlowProps {
  delay: number;
  isHovered: boolean;
  color?: 'blue' | 'orange' | 'purple';
}

interface Position {
  x: number;
  y: number;
}

interface PrizeData {
  position: string;
  value: string;
}

// Confetti Effect
const triggerConfetti = () => {
  const end = Date.now() + 3 * 1000;
  const colors = [
    "#A42A93", "#FFB940", "#6D49C3", // Original colors
    "#D982B8", "#FFD085", "#9C72D4", // Adjusted hues
    "#FFFFFF",                      // White
    "#39FF14", "#0FF0FC", "#FF073A"  // Bright neon green, neon cyan, neon red
  ];
  
  
  const frame = () => {
    if (Date.now() > end) return;
    
    // Left cannon
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    
    // Right cannon
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });
    
    requestAnimationFrame(frame);
  };
  
  frame();
};

// Star Component
const Star: React.FC<StarProps> = ({ isGlowing, delay, isHovered }) => {
  return (
    <motion.div
      key={delay}
      initial={{ scale: 1 }}
      animate={{
        scale: isGlowing || isHovered ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing || isHovered ? "#fff" : "#666",
      }}
      transition={{
        duration: isHovered ? 0.5 : 2,
        ease: "easeInOut",
        delay: isHovered ? 0 : delay,
      }}
      className="bg-[#666] h-[2px] w-[2px] rounded-full relative z-20"
    />
  );
};

// Glow Component
const Glow: React.FC<GlowProps> = ({ delay, isHovered, color = "blue" }) => {
  const glowColors: Record<string, string> = {
    blue: "bg-blue-500 shadow-blue-400",
    orange: "bg-orange-500 shadow-orange-400",
    purple: "bg-purple-500 shadow-purple-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isHovered ? [0, 1, 0.8] : [0, 1, 0],
        scale: isHovered ? [1, 1.5, 1] : 1 
      }}
      transition={{
        duration: isHovered ? 0.5 : 2,
        ease: "easeInOut",
        delay: isHovered ? 0 : delay,
      }}
      exit={{ opacity: 0 }}
      className={`absolute left-1/2 -translate-x-1/2 z-10 h-[6px] w-[6px] rounded-full blur-[3px] shadow-2xl ${glowColors[color]}`}
    />
  );
};

// Star Field Component
const StarField: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<Position>({ x: -1, y: -1 });
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);
  const stars = 108;
  const columns = 18;
  const rows = Math.ceil(stars / columns);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStarColor = (index: number): 'blue' | 'orange' | 'purple' => {
    const colors: ('blue' | 'orange' | 'purple')[] = ["blue", "orange", "purple"];
    return colors[index % 3];
  };

  const isStarHovered = (starIdx: number): boolean => {
    if (hoveredSection.x === -1 || hoveredSection.y === -1) return false;
    
    const starX = starIdx % columns;
    const starY = Math.floor(starIdx / columns);
    const distance = Math.sqrt(
      Math.pow(starX - hoveredSection.x, 2) + 
      Math.pow(starY - hoveredSection.y, 2)
    );
    return distance <= 2.5;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / (rect.width / columns));
    const y = Math.floor((e.clientY - rect.top) / (rect.height / rows));
    setHoveredSection({ x, y });
  };

  return (
    <div className="absolute inset-0 z-0">
      <div
        className="h-full w-full p-1"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `1px`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredSection({ x: -1, y: -1 })}
      >
        {[...Array(stars)].map((_, starIdx) => {
          const isGlowing = glowingStars.includes(starIdx);
          const delay = (starIdx % 10) * 0.1;
          const isHovered = isStarHovered(starIdx);
          const color = getStarColor(starIdx);
          
          return (
            <div
              key={`star-${starIdx}`}
              className="relative flex items-center justify-center"
            >
              <Star
                isGlowing={isGlowing}
                isHovered={isHovered}
                delay={delay}
              />
              <AnimatePresence mode="wait">
                {(isHovered || isGlowing) && (
                  <Glow 
                    delay={delay} 
                    isHovered={isHovered} 
                    color={color} 
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Prize Cards
const PrizeCard: React.FC<{ prize: PrizeData; index: number }> = ({ prize, index }) => (
  <motion.div
    key={prize.position}
    className="border border-orange-500 rounded-lg p-6 
               backdrop-blur-sm bg-black/10
               shadow-[0_0_10px_rgba(251,146,60,0.4)]
               hover:shadow-[0_0_20px_rgba(251,146,60,0.6)]
               transition-all duration-300 group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <span className="block text-xl text-center mb-4 text-transparent bg-gradient-to-r 
                    from-orange-400 to-purple-400 bg-clip-text 
                    group-hover:from-orange-300 group-hover:to-purple-300">
      {prize.position}
    </span>
    <span className="block text-3xl font-semibold text-center text-transparent 
                    bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text
                    group-hover:from-orange-300 group-hover:via-purple-300 group-hover:to-blue-300">
      {prize.value}
    </span>
  </motion.div>
);

// Main Component
const PrizeRevealCard: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const hasTriggeredConfetti = useRef<boolean>(false);

  const prizeData: PrizeData[] = [
    { position: "Winner", value: "₹15,000" },
    { position: "First Runner Up", value: "₹10,000" },
    { position: "Second Runner Up", value: "₹5,000" }
  ];

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      if (!hasTriggeredConfetti.current) {
        triggerConfetti();
        hasTriggeredConfetti.current = true;
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <motion.div 
        className="relative w-full max-w-5xl rounded-xl border-2 border-orange-400 p-8 
                   shadow-[0_0_15px_rgba(251,146,60,0.5)]
                   transition-all duration-500 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ boxShadow: '0 0 25px rgba(251,146,60,0.7)' }}
      >
        <StarField />
        <div className="relative z-10">
          {!isRevealed ? (
            <div 
              className="flex flex-col items-center justify-center py-20 cursor-pointer
                         rounded-lg transition-all duration-300"
              onClick={handleReveal}
            >
              <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-purple-400 
                           bg-clip-text hover:from-orange-300 hover:to-purple-300 transition-all duration-300 mb-4">
                Click to Reveal Prizes
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <ChevronDown className="w-8 h-8 text-orange-400" />
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r 
                           from-orange-400 via-purple-400 to-blue-400 bg-clip-text">
                Prizes Worth ₹30,000
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {prizeData.map((prize, index) => (
                  <PrizeCard 
                    key={prize.position} 
                    prize={prize} 
                    index={index} 
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PrizeRevealCard;