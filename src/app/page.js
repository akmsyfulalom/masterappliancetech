import Image from 'next/image'
import {Button} from '@nextui-org/button'; 
import Hero from '@/components/Home/Hero';
import BookingSection from '@/components/Home/Booking';

export default function Home() {
  return (
<div>
  <Hero />
  <BookingSection />
</div>

  )
}
