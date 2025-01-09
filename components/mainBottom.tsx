import React from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient';
const mainBottom = () => {
  return (<>
  <div className='p-10'>

            <HoverBorderGradient
                containerClassName="rounded-full"
                className="text-5xl p-10 dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >1ST & 2ND FEB 2025
              </HoverBorderGradient>
                  
  </div>
              </>
  )
}

export default mainBottom