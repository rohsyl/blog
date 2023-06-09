'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import useLocalStorage from "@/app/hooks/useLocalStorage";

const inter = Inter({ subsets: ['latin'] })

/*export const metadata = {
  title: 'Sylvain\'s Blog',
  description: 'A blog about software development, tech, and life.',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

    if(darkMode == null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }

    function toggleDarkMode() {

        setDarkMode(!darkMode);

    }

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={inter.className + ' font-mono bg-white dark:bg-black'}>

      <Header />

      <div className="font-mono mt-10">
        {children}
      </div>

      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      </body>
    </html>
  )
}
