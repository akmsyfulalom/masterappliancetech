"use client"
import BookingSection from '@/components/Home/Booking';
import ContactForm from '@/components/Home/ContactForm/ContactForm';
import Hero from '@/components/Home/Hero';
import PropertyServiceSection from '@/components/Home/PropertyServiceSection/PropertyServiceSection';
import GetReviews from '@/components/Home/Reviews/GetReviews';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: "500",
      delay: "500"
    });
  }, []);

  return (
    <div>
      <Hero />
      <BookingSection />
      <PropertyServiceSection />
    
      <GetReviews />
      <ContactForm></ContactForm>
    </div>

  )
}



