import { Montserrat } from 'next/font/google';
import './globals.css'
import { Providers } from './provider'
import PrimaryNavbar from '@/components/Shared/Navbar'
import Footer from '@/components/Shared/Footer';
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
      <body className={`${montserrat.className} `} >
        <Providers>
        <PrimaryNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
