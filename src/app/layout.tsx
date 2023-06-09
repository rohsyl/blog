import './globals.css'
import { Inter } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sylvain\'s Blog',
  description: 'A blog about software development, tech, and life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' font-mono'}>

      <Header />

      <div className="font-mono mt-10">
        {children}
      </div>

      <Footer />

      </body>
    </html>
  )
}
