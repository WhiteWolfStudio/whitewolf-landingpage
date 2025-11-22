'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { projects, type Project } from '@/data/projects';

function ProjectCard({ project }: {
  project: Project;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (project.status === 'live') {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border w-96 flex-shrink-0 overflow-hidden transition-all duration-300 ${
        isHovered ? 'border-gray-600' : 'border-gray-800'
      } ${project.status === 'live' ? 'cursor-pointer' : 'cursor-default'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      tabIndex={project.status === 'live' ? 0 : undefined}
      onKeyDown={(e) => {
        if (project.status === 'live' && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none" />

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.2s_ease-in-out]"
             style={{ transform: 'translate(-100%, -100%)' }} />
      </div>

      {project.status === 'coming-soon' && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full z-20">
          Coming Soon
        </div>
      )}

      <div className="relative w-full h-56 overflow-hidden bg-gray-800/50 rounded-t-2xl z-10">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
      </div>
    </div>
  );
}

function MarqueeRow({ items, duration, direction }: {
  items: Project[];
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
        <ProjectCard
          key={`${project.name}-${index}`}
          project={project}
        />
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
            <MarqueeRow
              items={projects}
              duration={40}
              direction="right"
            />
            <MarqueeRow
              items={projects}
              duration={45}
              direction="left"
            />
          </div>

        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-20">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-full overflow-hidden transition-all duration-300 hover:border-gray-500 hover:scale-105 shadow-lg shadow-white/5"
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]" />

            <span className="relative z-10">View All Projects</span>
            <svg
              className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
