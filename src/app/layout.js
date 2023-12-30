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
  title: 'Master Appliance Tech',
  description: '"Experience top-tier appliance repair with Cody Zimmerman, a seasoned industry expert since 2003. Factory Authorized for leading brands like Bosch, Whirlpool, and Samsung, ensuring unmatched expertise for your repairs."',
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
