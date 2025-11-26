import './globals.css'
import Html from "@/app/components/Html";
import Header from "@/app/components/Header";
import Head from "next/head";


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
          <Head>
              {process.env.NODE_ENV == "production" && (
                  <script defer src="https://analytics.rohs.ch/script.js" data-website-id="b3deab3d-77e1-4a19-a8c6-8d02d71d72b8"></script>
              )}
          </Head>
          <Header />
          <div className="font-mono md:pt-30">
            {children}
          </div>
      </Html>
  )
}
