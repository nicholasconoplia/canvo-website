"use client"

import { useEffect, useRef } from "react"
import { Shield, Apple, Monitor } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function SecurityNotice() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-900/20 to-background">
      <div className="container px-4 md:px-6">
        <div ref={contentRef} className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
              Security Notice
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Understanding Download Security Warnings
            </h2>
            <p className="text-xl text-muted-foreground">
              You may see security warnings when downloading or opening Canvo. Here's why and how to proceed safely.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-purple-500/20 bg-background/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Why You See These Warnings</h3>
                  <p className="text-muted-foreground mb-4">
                    Canvo is a safe, open-source application. The security warnings appear because:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>On macOS: We haven't purchased an Apple Developer Certificate, which is required for automatic verification</li>
                    <li>On Windows: The app isn't signed with a Microsoft Authenticode certificate, which is required for automatic verification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-purple-500/20 bg-background/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Apple className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How to Open on macOS</h3>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>When you first try to open Canvo, you'll see a warning about an unidentified developer</li>
                    <li>Click "Cancel" in the warning dialog</li>
                    <li>Go to System Settings → Privacy & Security</li>
                    <li>Scroll down to "Security" section</li>
                    <li>Click "Open Anyway" next to the Canvo app</li>
                    <li>Click "Open" in the confirmation dialog</li>
                  </ol>
                  <p className="mt-4 text-muted-foreground">
                    After doing this once, you can open Canvo normally in the future.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-purple-500/20 bg-background/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Monitor className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How to Open on Windows</h3>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>When you see the "Windows protected your PC" warning, click "More info"</li>
                    <li>Click "Run anyway" to proceed</li>
                  </ol>
                  <p className="mt-4 text-muted-foreground">
                    This warning appears because Windows SmartScreen doesn't recognize our app yet. It's safe to proceed.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-purple-500/20 bg-background/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Why Canvo is Safe</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Canvo is open-source software - you can review our code on GitHub</li>
                    <li>We don't collect any personal data or Canvas credentials</li>
                    <li>All data is stored locally on your device</li>
                    <li>We use secure API connections to Canvas</li>
                    <li>Our code is regularly reviewed by the community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 