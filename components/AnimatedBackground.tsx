'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [glowIntensity, setGlowIntensity] = useState(0)

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => (prev === 0 ? 1 : 0))
    }, 3000)

    return () => {
      clearInterval(glowInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-0">
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: glowIntensity === 1 
              ? '0 0 40px 2px rgba(255,255,255,0.2)' 
              : '0 0 20px 1px rgba(255,255,255,0.1)'
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <Image
          src="/images/logo.png"
          alt="White Wolf Studio Logo"
          width={1000}
          height={1000}
          className="opacity-10"
          priority
        />
      </div>
    </div>
  )
}

export default AnimatedBackground

