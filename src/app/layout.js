import Footer from '@/components/Shared/Footer';
import PrimaryNavbar from '@/components/Shared/Navbar';
import Topvar from '@/components/Shared/Topbar';
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

      <body className={`${montserrat.className} bg-white`} >
        <Providers>
          <Topvar />
          <PrimaryNavbar />
        
          <div className='lg:px-20 px-10'>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
