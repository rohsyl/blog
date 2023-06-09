
export default function Container({children}: { children: React.ReactNode }) {
    return (
    <main className="mx-auto max-w-screen-xl p-16 md:p-8 lg:p-10 text-black dark:text-white">
        {children}
    </main>
    )
}