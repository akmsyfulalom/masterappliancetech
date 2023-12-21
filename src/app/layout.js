import { Montserrat } from 'next/font/google';
import './globals.css'
import { Providers } from './provider'
import PrimaryNavbar from '@/components/Shared/Navbar'
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: "--font-mont"
  
})

export const metadata = {
  title: 'Master Appliance',
  description: 'Master appliance tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Providers>
        <PrimaryNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
