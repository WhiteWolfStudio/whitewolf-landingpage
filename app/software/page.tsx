import AnimatedBackground from '../../components/AnimatedBackground'

export default function Software() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 container mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-bold mb-6">Our Software</h1>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-300">
            We&apos;re working on something exciting! Our innovative software solutions will be unveiled shortly.
            Stay tuned for updates.
          </p>
        </div>
      </div>
    </main>
  )
} 