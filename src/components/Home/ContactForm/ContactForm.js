'use client'

import Contact from "./Contact";

const ContactForm = () => {
  return (
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0" className="lg:flex lg:flex-row-reverse  mx-auto my-8">
      <div className="lg:w-2/4">
        <Contact></Contact>
      </div>
      <div className="lg:w-2/4 my-auto text-center">
        <h1 className="text-3xl py-4 font-bold">
Master Appliance Tech</h1>
        <p className="text-xl font-semibold text-secondary">Expert Appliance Repair: $120 Service Call & 1-Year Warranty for Peace of Mind! Book Your Appliance Repair Service Online and Get You Appliances Running Smoothly Again!</p>
      </div>
    </div>
  );
};

export default ContactForm;