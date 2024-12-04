import AnimatedBackground from '../components/AnimatedBackground'
import FadeIn from '../components/FadeIn'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <FadeIn className="z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-7xl font-bold mb-6 tracking-tight">
          Welcome to White Wolf Studio
        </h1>
        <p className="text-2xl mb-10 text-gray-300 leading-relaxed">
          Innovative software solutions for the modern world
        </p>
        <Link 
          href="/contact" 
          className="bg-white text-black px-8 py-4 rounded-lg font-semibold 
                     hover:bg-gray-200 transition-all duration-300 
                     shadow-lg hover:shadow-xl hover:scale-105 inline-block"
        >
          Get in touch
        </Link>
      </FadeIn>
    </main>
  )
}

