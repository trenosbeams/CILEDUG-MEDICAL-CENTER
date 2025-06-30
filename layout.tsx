import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rumah Sakit Ciledug Medical Center - Pelayanan Kesehatan Terbaik",
  description:
    "Rumah Sakit Ciledug Medical Center menyediakan pelayanan kesehatan komprehensif dengan fasilitas modern dan tenaga medis profesional di Ciledug, Tangerang.",
  keywords: "rumah sakit, ciledug, medical center, kesehatan, dokter, IGD, rawat inap, poliklinik",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
