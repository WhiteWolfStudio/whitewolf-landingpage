'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const services = [
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ['iOS & Android', 'React Native', 'Native Performance', 'App Store Deployment']
  },
  {
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and scalability.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['React & Next.js', 'Responsive Design', 'Cloud Deployment', 'Progressive Web Apps']
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent systems powered by machine learning and AI to automate processes and unlock new possibilities.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Custom AI Models']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-200 h-full overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.2s_ease-in-out]"
                       style={{ transform: 'translate(-100%, -100%)' }} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 text-white">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
