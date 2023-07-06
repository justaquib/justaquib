import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JustAquib',
  description: 'Creative, professional, innovative, unique, app developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>{children}</body>
    </html>
  )
}
