import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
