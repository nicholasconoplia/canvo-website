"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Instagram } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-purple-900/20 border-t border-purple-500/20 py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 overflow-hidden">
                <img 
                  src="https://i.ibb.co/CsM7pYbR/icon.png" 
                  alt="Canvo Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight">Canvo</span>
            </div>
            <p className="text-muted-foreground text-lg">
              The ultimate to-do list app for students with Canvas integration. Simplify your academic life and never
              miss a deadline again.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10" asChild>
                <Link href="https://www.instagram.com/nickconoplia/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10" asChild>
                <Link href="https://github.com/nicholasconoplia/student-todo-list/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground">Subscribe to our newsletter for updates and new features.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 backdrop-blur-sm border-purple-500/20 focus:border-purple-500/50 h-12 rounded-xl"
              />
              <Button className="w-full bg-primary/90 hover:bg-primary shadow-[0_4px_14px_0_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(139,92,246,0.6)] transition-all duration-300 h-12 rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-500/10 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Canvo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

