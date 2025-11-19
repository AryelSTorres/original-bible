import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Original Bible',
  description: 'A premium Bible app with dark minimalist design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}