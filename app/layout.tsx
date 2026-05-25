import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kunal Bhardwaj | Senior Mobile App Developer',
  description: 'Senior Mobile App Developer & Content Creator. Flutter, Android, Full Stack. Building high-performance digital experiences.',
  keywords: ['Mobile Developer', 'Flutter', 'Android', 'Full Stack', 'React', 'Next.js'],
  authors: [{ name: 'Kunal Bhardwaj' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Kunal Bhardwaj | Senior Mobile App Developer',
    description: 'Building smooth digital experiences with performance-focused engineering.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
      </head>
      <body className="antialiased bg-[#121212]">
        {children}
      </body>
    </html>
  )
}
