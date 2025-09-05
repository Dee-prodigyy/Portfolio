"use client"

import type React from "react"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Suspense } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Suspense fallback={null}>
            {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
