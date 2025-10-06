'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, type Project } from '@/data/projects';
import FadeIn from '@/components/FadeIn';

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border overflow-hidden transition-all duration-300 ${
        isHovered ? 'border-gray-600' : 'border-gray-800'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.2s_ease-in-out]"
             style={{ transform: 'translate(-100%, -100%)' }} />
      </div>

      <div className="relative z-10">
        {project.status === 'coming-soon' && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
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
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              White Wolf Studios
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of innovative web applications, mobile solutions, and digital experiences we&apos;ve created for our clients.
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <FadeIn>
            <div className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-3xl border border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-white to-gray-300 text-black rounded-full hover:scale-105 transition-transform duration-300"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} White Wolf Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
