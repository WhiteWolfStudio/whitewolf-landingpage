'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const stats = [
  { label: 'Projects Completed', value: '100+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Technologies', value: '20+' }
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Unleashing innovation through code and creativity
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <FadeIn direction="left">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Building the Future, One Line at a Time
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  At White Wolf Studios, we&apos;re not just developers—we&apos;re digital architects,
                  crafting solutions that push boundaries and redefine what&apos;s possible. Our team
                  combines technical expertise with creative vision to deliver products that don&apos;t
                  just meet expectations, they exceed them.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  From startups to enterprises, we&apos;ve partnered with ambitious companies and
                  individuals to transform ideas into powerful digital experiences. Whether it&apos;s a
                  sleek mobile app, a robust web platform, or an intelligent AI solution, we bring
                  the same level of dedication and innovation to every project.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent mb-4">
                    WWS
                  </div>
                  <p className="text-gray-400 text-sm">
                    Excellence in Every Pixel
                  </p>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-500 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
