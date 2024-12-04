import AnimatedBackground from '../../components/AnimatedBackground'
import FadeIn from '../../components/FadeIn'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <FadeIn className="z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="page-title">About White Wolf Studio</h1>
        <div className="prose lg:prose-xl max-w-3xl mx-auto">
          <p className="content-text mb-8">
            Founded in 2024, White Wolf Studio is dedicated to creating innovative software solutions 
            that make a difference in people&apos;s lives.
          </p>
          <p className="content-text mb-12">
            Our team of passionate developers and designers work together to build 
            cutting-edge applications that combine functionality with elegant design.
          </p>
          <h2 className="section-title mt-16">Our Mission</h2>
          <p className="content-text">
            To deliver exceptional software solutions while maintaining the highest standards 
            of quality and user experience.
          </p>
        </div>
      </FadeIn>
    </main>
  )
} 