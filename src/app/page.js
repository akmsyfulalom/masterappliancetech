import BookingSection from '@/components/Home/Booking';
import ContactForm from '@/components/Home/ContactForm/ContactForm';
import Hero from '@/components/Home/Hero';
import Pmanagement from '@/components/Home/Pmanagement';
import Testimonials from '@/components/Home/Testimonials';

export default function Home() {
  return (
    <div>
      {/* <Slidebar></Slidebar> */}
      <Hero />
      <BookingSection />
      <Pmanagement></Pmanagement>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>

    </div>

  )
}
