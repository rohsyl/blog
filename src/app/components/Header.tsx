'use client';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    return (

        <header className="fixed w-full z-1000 top-0 font-mono p-4 md:p-8 lg:p-10">
            <div className="mx-auto max-w-(--breakpoint-xl) ">
                <div className="w-full items-center justify-between text-sm lg:flex">
                    <Link href="/">
                        <div className="flex items-center justify-between font-mono">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className={'bg-black dark:bg-transparent'}
                            />
                            <div className="ml-4">
                                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sylvain Roh</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Software Engineer</div>
                            </div>
                        </div>
                    </Link>

                    <nav className="flex grow items-center justify-around mt-4 text-sm font-medium text-gray-900 dark:text-gray-100 max-w-2xl mt-10 lg:mt-0">
                        <Link href="/" className={'hover:underline ' + (pathname == "/" ? "font-bold underline" : "")}>Home</Link>
                        <Link href="/blog" className={'hover:underline ' + (pathname == "/blog" ? "font-bold underline" : "")}>Blog</Link>
                        <Link href="/about" className={'hover:underline ' + (pathname == "/about" ? "font-bold underline" : "")}>About</Link>
                        <Link href="/contact" className={'hover:underline ' + (pathname == "/contact" ? "font-bold underline" : "")}>Contact</Link>
                    </nav>

                </div>

            </div>
        </header>
    )
}