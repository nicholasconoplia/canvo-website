import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "src/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Canvo - Canvas Integration for Students",
  description: "The ultimate to-do list app for students with Canvas integration",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 