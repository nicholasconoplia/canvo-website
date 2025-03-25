"use client"

import { useState } from "react"
import { Apple, Cpu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MacDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MacDownloadModal({ isOpen, onClose }: MacDownloadModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative bg-background border border-purple-500/20 rounded-xl p-6 shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-accent"
          onClick={onClose}
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold">Choose Your Mac Version</h3>
          <p className="text-muted-foreground mt-2">Select the appropriate download for your Mac</p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="https://github.com/nicholasconoplia/student-todo-list/releases/download/v1/Canvo-4.0.0-arm64.dmg"
            className="block"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300" />
              <Button
                variant="outline"
                className="relative w-full rounded-xl border-2 border-purple-500/50 bg-background/50 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 h-auto py-4 px-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <Apple className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Apple Silicon (M1/M2/M3/M4)</div>
                    <div className="text-sm text-muted-foreground mt-1">For Macs with Apple M-series chips</div>
                  </div>
                </div>
              </Button>
            </div>
          </a>
          
          <a 
            href="https://github.com/nicholasconoplia/student-todo-list/releases/download/v1/Canvo-4.0.0-x64.dmg"
            className="block"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300" />
              <Button
                variant="outline"
                className="relative w-full rounded-xl border-2 border-purple-500/50 bg-background/50 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 h-auto py-4 px-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <Cpu className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Intel Mac</div>
                    <div className="text-sm text-muted-foreground mt-1">For older Macs with Intel processors</div>
                  </div>
                </div>
              </Button>
            </div>
          </a>
        </div>
        
        <p className="text-xs text-muted-foreground mt-6 text-center">
          Not sure which version to download? Intel Macs were sold before 2020. 
          Apple Silicon Macs (M1, M2, M3, M4) were released from late 2020 onwards.
        </p>
      </div>
    </div>
  )
} 