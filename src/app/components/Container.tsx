
export default function Container({children}: { children: React.ReactNode }) {
    return (
    <main className="mx-auto max-w-(--breakpoint-xl) p-10 md:p-8 lg:p-10 text-black dark:text-white">
        {children}
    </main>
    )
}