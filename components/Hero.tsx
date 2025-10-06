'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Spacer for logo */}
          <div className="h-[280px] mb-12" />

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            White Wolf Studios
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          >
            Crafting Digital Excellence
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            We build cutting-edge mobile apps, powerful web applications, and innovative AI solutions
            for companies and individuals ready to transform their vision into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-200"
            >
              Explore Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
