"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Task Management Dashboard",
    description: "Efficiently manage and organize all your tasks with our intuitive main dashboard interface.",
    image: "https://i.ibb.co/kspg6Vns/tasks.png",
  },
  {
    id: 2,
    title: "Create New Tasks",
    description: "Easily add new tasks with our streamlined task creation interface.",
    image: "https://i.ibb.co/5gfX8hSy/add-new-task.png",
  },
  {
    id: 3,
    title: "Canvas Integration",
    description: "Seamlessly connect with Canvas to import and manage your academic assignments.",
    image: "https://i.ibb.co/Y7fNhPTt/canvas.png",
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideInterval = useRef<NodeJS.Timeout | null>(null)

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }

    slideInterval.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        setIsAnimating(false)
      }, 500)
    }, 5000)
  }

  useEffect(() => {
    startSlideTimer()
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }
  }, [])

  const goToSlide = (index: number) => {
    if (index === currentSlide) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsAnimating(false)
    }, 500)
    startSlideTimer()
  }

  const prevSlide = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      setIsAnimating(false)
    }, 500)
    startSlideTimer()
  }

  const nextSlide = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      setIsAnimating(false)
    }, 500)
    startSlideTimer()
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              currentSlide === index ? (isAnimating ? "opacity-0" : "opacity-100") : "opacity-0 pointer-events-none",
            )}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-[600px]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-contain rounded-xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <div className="backdrop-blur-md bg-background/30 p-6 rounded-xl border border-purple-500/20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm text-muted-foreground">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 rounded-full h-10 w-10 shadow-[0_0_20px_0_rgba(0,0,0,0.2)]"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 rounded-full h-10 w-10 shadow-[0_0_20px_0_rgba(0,0,0,0.2)]"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index ? "w-6 bg-primary shadow-[0_0_10px_0_rgba(139,92,246,0.7)]" : "bg-primary/40",
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

