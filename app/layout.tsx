import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: 'Bolivia Travel',
  description: 'travel app with next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100'>
        <Navbar />
        <main className=' relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
