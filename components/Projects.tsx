'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    name: 'PrepAhead',
    url: 'https://prepahead.co.za',
    description: 'Educational platform for exam preparation and learning resources',
    status: 'live'
  },
  {
    name: 'MyInsureBuddy',
    url: 'https://myinsurebuddy.co.za',
    description: 'Insurance comparison and management platform',
    status: 'live'
  },
  {
    name: 'Burfilicious',
    url: 'https://burfilicious.co.za',
    description: 'Premium burger restaurant website',
    status: 'live'
  },
  {
    name: 'EquipX',
    url: 'https://equipx.co.za',
    description: 'Online marketplace for manufacturing equipment',
    status: 'coming-soon'
  },
  {
    name: 'Gegrond',
    url: 'https://gegrond.co.za',
    description: 'Real estate platform for property listings and management',
    status: 'live'
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 w-96 flex-shrink-0">
      {project.status === 'coming-soon' && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          Coming Soon
        </div>
      )}

      <div className="mb-6 text-white">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white">{project.name}</h3>
      <p className="text-base text-gray-500 mb-4 font-mono">{project.url.replace('https://', '')}</p>
      <p className="text-gray-400 text-base mb-6">{project.description}</p>

      {project.status === 'live' && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-base text-gray-400 hover:text-white transition-colors"
        >
          <span>Visit Site</span>
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </div>
  );
}

function MarqueeRow({ items, duration, direction }: {
  items: typeof projects;
  duration: number;
  direction: 'left' | 'right';
}) {
  // Triple the items for seamless infinite scroll
  const repeatedItems = [...items, ...items, ...items];

  return (
    <motion.div
      className="flex gap-6"
      animate={{
        x: direction === 'right' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
    >
      {repeatedItems.map((project, index) => (
        <ProjectCard key={`${project.name}-${index}`} project={project} />
      ))}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the digital experiences we&apos;ve crafted for our clients
          </p>
        </FadeIn>

        {/* 3D Marquee */}
        <div
          className="relative h-[700px] overflow-hidden"
          style={{ perspective: '2000px' }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-8 py-20"
            style={{
              transform: 'rotateX(15deg) rotateY(-15deg) rotateZ(2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <MarqueeRow items={projects} duration={40} direction="right" />
            <MarqueeRow items={projects} duration={45} direction="left" />
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
