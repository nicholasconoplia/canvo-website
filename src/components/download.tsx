"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Apple, Monitor, Phone } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Download() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const buttonsRef = useRef(null)
  const macRef = useRef(null)
  const windowsRef = useRef(null)
  const iphoneRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    })

    tl.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }).fromTo(
      [macRef.current, windowsRef.current, iphoneRef.current],
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.4",
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="download" className="py-24 bg-gradient-to-b from-purple-900/20 to-background">
      <div className="container px-4 md:px-6">
        <div ref={contentRef} className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
            Download
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Ready to Transform Your Academic Life?
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Download Canvo today and experience the perfect blend of Canvas integration and task management.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <div ref={macRef} className="w-full md:w-1/3">
            <a href="https://github.com/nicholasconoplia/student-todo-list/releases/download/4.0/To-Do-4.0.0-arm64.dmg" className="block">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <Button
                  variant="outline"
                  className="relative w-full h-40 rounded-xl border-2 border-purple-500/50 bg-background/50 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 group-hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)]"
                >
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10">
                      <Apple className="h-12 w-12 text-purple-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Download for</div>
                      <div className="text-2xl font-bold mt-1">macOS</div>
                    </div>
                  </div>
                </Button>
              </div>
            </a>
          </div>

          <div ref={windowsRef} className="w-full md:w-1/3">
            <a href="https://github.com/nicholasconoplia/student-todo-list/releases/download/4.0/win-unpacked.zip" className="block">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <Button
                  variant="outline"
                  className="relative w-full h-40 rounded-xl border-2 border-purple-500/50 bg-background/50 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 group-hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)]"
                >
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10">
                      <Monitor className="h-12 w-12 text-purple-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Download for</div>
                      <div className="text-2xl font-bold mt-1">Windows</div>
                    </div>
                  </div>
                </Button>
              </div>
            </a>
          </div>

          <div ref={iphoneRef} className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl blur opacity-50 transition duration-1000" />
              <Button
                variant="outline"
                className="relative w-full h-40 rounded-xl border-2 border-gray-600/50 bg-background/50 backdrop-blur-sm transition-all duration-300 cursor-not-allowed"
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="p-3 rounded-full bg-gray-700/30">
                    <Phone className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Download for</div>
                    <div className="text-2xl font-bold mt-1">iPhone</div>
                    <div className="text-sm text-muted-foreground mt-2">Coming Soon</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-muted-foreground">
          <div className="inline-block backdrop-blur-sm bg-background/20 p-4 rounded-xl border border-purple-500/10">
            <p>Version 4.0.0 | Released March 2025</p>
            <p className="mt-2">Compatible with macOS 10.15+ and Windows 10+</p>
          </div>
        </div>
      </div>
    </section>
  )
}

