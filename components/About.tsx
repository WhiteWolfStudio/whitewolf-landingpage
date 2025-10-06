'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const services = [
  { label: 'Landing Pages', description: 'Stunning first impressions' },
  { label: 'Web Applications', description: 'Scalable & robust' },
  { label: 'Mobile Apps', description: 'iOS & Android native' },
  { label: 'Custom Solutions', description: 'Your vision, realized' }
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
              From concept to deployment, we build what others can&apos;t
            </p>
          </FadeIn>

          <FadeIn>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="space-y-6 text-center">
                <h3 className="text-3xl font-bold text-white">
                  No Limits, No Compromises
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Need a sleek landing page? A complex web platform? A mobile app that stands out?
                  We build it all. White Wolf Studios specializes in turning ambitious ideas into
                  production-ready products that perform.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Whether you&apos;re launching your first product or scaling to millions of users,
                  we bring the same precision and innovation to every project. From simple to
                  sophisticated, if you can envision it, we can engineer it.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl md:text-2xl font-bold text-white mb-2"
                  >
                    {service.label}
                  </motion.div>
                  <div className="text-gray-500 text-sm md:text-base">
                    {service.description}
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
