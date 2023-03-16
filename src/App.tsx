import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cn from './lib/utils';
import img_1 from './assets/jason-leung-unsplash.jpg';
import img_2 from './assets/pepsi.png';

function App() {
  const [isHovered, setHovered] = useState(false);
  return (
    <main className={cn('bg-zinc-900 min-h-screen')}>
      <div
        className="relative w-[600px] h-[600px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute top-0 left-0 bg-blue-600 w-full h-full" />
        <img
          src={img_1}
          alt="bg_img_1"
          className="absolute top-0 left-0 aspect-square"
          style={{
            clipPath: 'url(#clipper)',
          }}
        />
        <img src={img_2} alt="can" className="absolute inset-0 m-auto w-48" />
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs id="customMask">
            <clipPath id="clipper">
              <motion.circle
                initial={false}
                animate={{
                  transform: isHovered
                    ? 'matrix(1,0,0,1,0,0)'
                    : 'matrix(0,0,0,0,125,150)',
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
                r="75%"
                cx="30%"
                cy="30%"
              />
              <motion.circle
                initial={false}
                animate={{
                  transform: isHovered
                    ? 'matrix(1,0,0,1,0,0)'
                    : 'matrix(0,0,0,0,-30,50)',
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: 0.25,
                }}
                r="80%"
                cx="85%"
                cy="200%"
              />
              <motion.circle
                initial={false}
                animate={{
                  transform: isHovered
                    ? 'matrix(1,0,0,1,0,0)'
                    : 'matrix(0,0,0,0,20,70)',
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
                r="75%"
                cx="20%"
                cy="250%"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </main>
  );
}

export default App;
