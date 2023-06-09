import {children} from "hastscript/lib/jsx-classic";


export default function Container({children,}: { children: React.ReactNode }) {
    return (
    <main className="mx-auto max-w-screen-xl p-4 md:p-8 lg:p-10">
        {children}
    </main>
    )
}