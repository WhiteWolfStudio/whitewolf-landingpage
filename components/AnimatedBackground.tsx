'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedBackground() {
  const { scrollY } = useScroll();

  // Transform values based on scroll position
  const scale = useTransform(scrollY, [0, 1200], [1, 3]);
  const opacity = useTransform(scrollY, [0, 1200], [1, 0.15]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-center items-start pt-16 h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-[calc((100vh-280px)/2-10rem)]"
            style={{
              scale,
              opacity,
            }}
          >
            <div className="relative" style={{ width: 280, height: 280 }}>
              <div className="relative overflow-hidden" style={{ width: 280, height: 280 }}>
                {/* Base logo */}
                <Image
                  src="/images/logo.png"
                  alt="Background"
                  width={280}
                  height={280}
                  priority
                  style={{ position: 'relative', zIndex: 1 }}
                />

                {/* Shimmer layer - uses the logo as a mask */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    WebkitMaskImage: 'url(/images/logo.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: 'url(/images/logo.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                >
                  <motion.div
                    className="h-full w-[100px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                      transform: 'skewX(-20deg)',
                    }}
                    animate={{
                      x: [-150, 430],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 1,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
