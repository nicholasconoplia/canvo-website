"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function DemoVideo() {
  const sectionRef = useRef(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true);
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    })

    tl.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }).fromTo(
      videoContainerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.4",
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="demo" className="py-24 bg-gradient-to-b from-purple-900/20 to-background">
      <div className="container px-4 md:px-6">
        <div ref={textRef} className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
            Demo
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            See Canvo in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Watch how Canvo simplifies your academic life by bringing Canvas assignments into a powerful to-do list.
          </p>
        </div>

        <div
          ref={videoContainerRef}
          className="relative max-w-[90%] lg:max-w-[80%] xl:max-w-[1200px] mx-auto rounded-2xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] border border-purple-500/30"
        >
          <div className="aspect-video bg-muted relative group">
            {isPlaying ? (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-[-1px] scale-[1.01]">
                  <iframe
                    src="https://streamable.com/e/aa1oak?autoplay=1&nologo=1"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    allowFullScreen
                    style={{ backgroundColor: '#0f0f0f', borderRadius: 0 }}
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer" onClick={handlePlayClick}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full w-20 h-20 bg-background/80 backdrop-blur-sm border-primary group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_0_rgba(139,92,246,0.5)]"
                  >
                    <Play className="h-8 w-8 text-primary fill-primary/20" />
                  </Button>
                </div>
                <div 
                  className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300 cursor-pointer" 
                  onClick={handlePlayClick}
                />
                <img
                  src="https://cdn-cf-east.streamable.com/image/aa1oak.jpg"
                  alt="Canvo Demo Video Thumbnail"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={handlePlayClick}
                />
              </>
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto backdrop-blur-sm bg-background/20 p-4 rounded-xl border border-purple-500/10">
            The video demonstrates how to import Canvas assignments, create custom tasks, and organize your workflow for
            maximum productivity.
          </p>
        </div>
      </div>
    </section>
  )
}

