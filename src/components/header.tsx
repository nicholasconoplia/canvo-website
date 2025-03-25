"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-purple-500/20 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 overflow-hidden transition-all duration-300 group-hover:rounded-3xl">
              <img 
                src="https://i.ibb.co/CsM7pYbR/icon.png" 
                alt="Canvo Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl tracking-tight">Canvo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Why Canvo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <Button
              onClick={() => scrollToSection("download")}
              className="bg-primary/90 hover:bg-primary shadow-[0_4px_14px_0_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              Download
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-purple-500/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-purple-500/20">
          <nav className="container px-4 py-6 flex flex-col space-y-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground transition-colors text-left border-b border-purple-500/10 pb-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground transition-colors text-left border-b border-purple-500/10 pb-2"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground transition-colors text-left border-b border-purple-500/10 pb-2"
            >
              Why Canvo
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground transition-colors text-left border-b border-purple-500/10 pb-2"
            >
              FAQ
            </button>
            <Button
              className="w-full bg-primary/90 hover:bg-primary shadow-[0_4px_14px_0_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(139,92,246,0.6)] transition-all duration-300"
              onClick={() => scrollToSection("download")}
            >
              Download
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

