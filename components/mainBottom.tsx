import React from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient';

const MainBottom = () => {
  return (
    <div className='p-4 sm:p-6 md:p-10'>
      <HoverBorderGradient
        containerClassName="rounded-full"
        className="text-sm sm:text-lg md:text-2xl p-2 sm:p-3 md:p-5 dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        style={{ fontFamily: 'var(--font-orbitron)' }}
      >
        1ST & 2ND FEB 2025
      </HoverBorderGradient>
    </div>
  );
}

export default MainBottom;