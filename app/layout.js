import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './util/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parallel-Hunt',
  description: 'Win more. Win fast. Win together',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar isLogin="" />
        <div className="h-16 w-full"></div>
        {children}</body>
    </html>
  )
}
