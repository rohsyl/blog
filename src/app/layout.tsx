import './globals.css'
import Html from "@/app/components/Html";
import Header from "@/app/components/Header";


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
      <Html>
          <Header />
          <div className="font-mono md:pt-30">
            {children}
          </div>
      </Html>
  )
}
