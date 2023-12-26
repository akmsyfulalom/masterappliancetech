"use client"
import BookingSection from '@/components/Home/Booking';
import ContactForm from '@/components/Home/ContactForm/ContactForm';
import Hero from '@/components/Home/Hero';
// import Pmanagement from '@/components/Home/Pmanagement';
import PropertyServiceSection from '@/components/Home/PropertyServiceSection';
import Testimonials from '@/components/Home/Testimonials';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: "1000",
      delay: "1000"
    });
  }, []);

  return (
    <div>
      {/* <Slidebar></Slidebar> */}
      <Hero />
      <BookingSection />
      {/* <Pmanagement></Pmanagement> */}
      <PropertyServiceSection />
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      {/* <div data-aos="fade-up">................</div> */}
    </div>

  )
}
