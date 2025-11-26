import './globals.css'
import Html from "@/app/components/Html";
import Header from "@/app/components/Header";
import Script from "next/script";


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
          {(process.env.NODE_ENV || 'production') == "production" && (
              <Script defer src="https://analytics.rohs.ch/script.js" id="analytics" data-website-id="b3deab3d-77e1-4a19-a8c6-8d02d71d72b8"></Script>
          )}
          <Header />
          <div className="font-mono md:pt-30">
            {children}
          </div>
      </Html>
  )
}
