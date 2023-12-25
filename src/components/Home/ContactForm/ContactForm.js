'use client'

import Contact from "./Contact";

const ContactForm = () => {
  return (
    <div className="flex lg:flex-row-reverse w-2/4 mx-auto my-8">
      <div className="w-2/4">
        <Contact></Contact>
      </div>
      <div className="w-2/4 my-auto">
        <h1 className="text-3xl py-4">Some text here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem iste aperiam, non esse iure incidunt doloribus rem minima dolorum, vero odit voluptatibus? Nemo incidunt ipsa facilis sequi hic autem.</p>
      </div>
    </div>
  );
};

export default ContactForm;