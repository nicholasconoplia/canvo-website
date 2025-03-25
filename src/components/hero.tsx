"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSlideshow from "./hero-slideshow"

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.5",
      )
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-full lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="space-y-8">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
              Introducing Canvo
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              The To-Do List{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Built for Canvas
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] backdrop-blur-sm bg-background/20 p-6 rounded-2xl border border-purple-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              The ultimate to-do list app for students that seamlessly integrates with Canvas LMS. Never miss an
              assignment again.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                size="lg"
                className="group bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_14px_0_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(139,92,246,0.6)] transition-all duration-300 h-14 px-8 rounded-xl text-base"
                onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
                <span className="ml-2 bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-md bg-background/30 border-purple-500/30 hover:bg-background/50 h-14 px-8 rounded-xl text-base hover:border-purple-500/50 transition-all duration-300 group"
                onClick={() => window.open('https://github.com/nicholasconoplia/student-todo-list', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                Learn More
                <span className="ml-2 bg-purple-500/10 rounded-full w-6 h-6 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
            </div>
          </div>
          <div ref={imageRef} className="relative">
            <div className="relative h-[700px] w-full perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl opacity-50 -z-10" />
              <div className="absolute inset-0 flex items-center justify-center transform-style-3d rotate-y-3 hover:rotate-y-6 transition-transform duration-700">
                <div className="relative w-[95%] h-[95%] rounded-2xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] border border-purple-500/30 backdrop-blur-sm bg-background/30">
                  <HeroSlideshow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

