import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "src/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Canvo - Canvas Integration for Students",
  description: "The ultimate to-do list app for students with Canvas integration. Organize your academic tasks, sync with Canvas, and boost your productivity.",
  keywords: "Canvas LMS, student productivity, task management, academic organization, to-do list, education technology",
  authors: [{ name: "Canvo Team" }],
  creator: "Canvo",
  publisher: "Canvo",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://canvo.app",
    siteName: "Canvo",
    title: "Canvo - Canvas Integration for Students",
    description: "The ultimate to-do list app for students with Canvas integration. Organize your academic tasks, sync with Canvas, and boost your productivity.",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Canvo App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvo - Canvas Integration for Students",
    description: "The ultimate to-do list app for students with Canvas integration. Organize your academic tasks, sync with Canvas, and boost your productivity.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json", // You'll need to create this file
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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