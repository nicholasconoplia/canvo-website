"use client"

import { useEffect, useRef, useState } from "react"

export default function ParallaxBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null)
  const layer2Ref = useRef<HTMLDivElement>(null)
  const layer3Ref = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: string;
    delay: string;
  }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.1}px)`
      }

      if (layer1Ref.current && layer2Ref.current && layer3Ref.current) {
        layer1Ref.current.style.transform = `translateY(${scrollY * 0.1}px)`
        layer2Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`
        layer3Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array.from({ length: 10 }).map(() => ({
      width: 5 + Math.random() * 10,
      height: 5 + Math.random() * 10,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-b from-purple-950 via-background to-background"
      />

      {/* Parallax layers with reduced opacity */}
      <div
        ref={layer1Ref}
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(120, 50, 200, 0.3) 0%, transparent 70%)",
          transform: "translateY(0px)",
        }}
      />

      <div
        ref={layer2Ref}
        className="absolute top-20 right-0 w-full h-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 10%, rgba(180, 100, 255, 0.3) 0%, transparent 60%)",
          transform: "translateY(0px)",
        }}
      />

      <div
        ref={layer3Ref}
        className="absolute bottom-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 90%, rgba(100, 50, 150, 0.3) 0%, transparent 50%)",
          transform: "translateY(0px)",
        }}
      />

      {/* Floating particles with reduced opacity */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5 backdrop-blur-3xl"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration} infinite ease-in-out`,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>
    </div>
  )
}

