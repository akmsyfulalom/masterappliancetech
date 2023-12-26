import Footer from '@/components/Shared/Footer';
import PrimaryNavbar from '@/components/Shared/Navbar';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
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
      
      <body className={`${montserrat.className} bg-white max-w-screen-2xl`} >
        <Providers>
          <PrimaryNavbar />
          <div className='lg:mx-20'>
          {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
