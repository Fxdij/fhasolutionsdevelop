import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FHA SOLUTIONS INC.",
  description: "FHA SOLUTIONS INC. - Innovative Solutions for Modern Challenges",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-96x96-o3txOS8S99UCLIByNIrZNcCPwWL0iZ.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-vYCeX8z441vcqU46jnWRcjv1FvXzuo.png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#010101] text-gray-100`}>
        <Header />
        {children}
        <footer className="w-full py-6 px-4 bg-[#010101] text-gray-400">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 FHA SOLUTIONS INC. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'