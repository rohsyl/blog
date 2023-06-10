import Image from "next/image";
import DarkToggle from "@/app/components/DarkToggle";

export default function Footer(props: { darkMode: boolean, toggleDarkMode: () => void }) {
    return (
        <footer className="p-4 md:p-8 lg:p-10 font-mono">
            <div className="mx-auto text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    Sylvain Roh
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">
                    A blog about software development, tech, and life.
                </p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="https://github.com/rohsyl" className="mr-4 hover:underline md:mr-6 ">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sylvain-roh/" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <span>
            &copy;{(new Date()).getFullYear()}
            </span>
            <a href="/" className="hover:underline ml-2">Sylvain Roh</a>. All Rights Reserved.
          </span>
            </div>

            <div className="text-center mt-5">
                <DarkToggle darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
            </div>
        </footer>
    )
}