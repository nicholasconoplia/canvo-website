"use client"

import { useState } from "react"
import { Monitor, Cpu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WindowsDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WindowsDownloadModal({ isOpen, onClose }: WindowsDownloadModalProps) {
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
          <h3 className="text-xl font-bold">Choose Your Windows Version</h3>
          <p className="text-muted-foreground mt-2">Select the appropriate download for your Windows PC</p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="https://github.com/nicholasconoplia/student-todo-list/releases/download/v1/Canvo-4.0.0-x64.exe"
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
                    <Monitor className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Windows Installer (.exe)</div>
                    <div className="text-sm text-muted-foreground mt-1">Recommended for most users</div>
                  </div>
                </div>
              </Button>
            </div>
          </a>
          
          <a 
            href="https://github.com/nicholasconoplia/student-todo-list/releases/download/v1/canvo-win-unpacked.zip"
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
                    <div className="font-bold">Portable Version (.zip)</div>
                    <div className="text-sm text-muted-foreground mt-1">For users who prefer no installation</div>
                  </div>
                </div>
              </Button>
            </div>
          </a>
        </div>
        
        <p className="text-xs text-muted-foreground mt-6 text-center">
          The installer version is recommended for most users as it handles updates automatically.
          The portable version is useful if you want to run Canvo without installing it.
        </p>
      </div>
    </div>
  )
} 