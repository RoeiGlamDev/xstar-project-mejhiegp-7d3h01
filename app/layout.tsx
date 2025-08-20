import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VidNexus',
  description: 'VidNexus - AI video creation technology for modern solutions',
  keywords: ['AI', 'video', 'technology', 'VidNexus', 'innovation', 'modern'],
  authors: [{ name: 'VidNexus' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    < lang="en" className="">
      <body className={${inter.className} bg-white text-black min-h-screen antialiased}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-500 to-red-500">
          {children}
        </div>
      </body>
    </>
  )
}
);