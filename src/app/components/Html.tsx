"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import {useEffect} from "react";
import Footer from "@/app/components/Footer";
import {Inter} from "next/font/google";
import Header from "@/app/components/Header";


const inter = Inter({ subsets: ['latin'] })

export default function Html({children}: { children: React.ReactNode }) {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

    useEffect(() => {
        if(darkMode == null) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setDarkMode(true);
            } else {
                setDarkMode(false);
            }
        }
    }, [darkMode, setDarkMode]);

    function toggleDarkMode() {

        setDarkMode(!darkMode);

    }
    return (
        <html lang="en" className={darkMode ? 'dark' : ''}>
            <body className={inter.className + ' font-mono bg-white dark:bg-black'}>
                {children}
                <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </body>
        </html>
    );
}