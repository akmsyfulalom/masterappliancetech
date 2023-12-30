"use client"
import BookingSection from '@/components/Home/Booking';
import ContactForm from '@/components/Home/ContactForm/ContactForm';
import FaqSection from '@/components/Home/Faq';
import Hero from '@/components/Home/Hero';
import ProjectGallery from '@/components/Home/ProjectGallery';
import PropertyServiceSection from '@/components/Home/PropertyServiceSection/PropertyServiceSection';
import Reviews from '@/components/Home/Reviews';
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
      <Hero />
      <BookingSection />
      <PropertyServiceSection />
      <Reviews />
      <Testimonials></Testimonials>
      <ProjectGallery />
      <ContactForm></ContactForm>
      <FaqSection />
    </div>

  )
}
