import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (

        <header className="font-mono p-4 md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl ">
                <div className="w-full items-center justify-between text-sm lg:flex">
                    <div className="flex items-center justify-between font-mono">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sylvain Roh</div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Software Engineer</div>
                        </div>
                    </div>

                    <nav className="flex flex-grow items-center justify-around mt-4 text-sm font-medium text-gray-900 dark:text-gray-100 max-w-2xl mt-10 lg:mt-0">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/blog" className="hover:underline">Blog</Link>
                        <Link href="/about" className="hover:underline">About</Link>
                        <Link href="/contact" className="hover:underline">Contact</Link>
                    </nav>

                </div>

            </div>
        </header>
    )
}