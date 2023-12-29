import React from 'react'

export default function CardForBookPage() {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3">
     <div className="md:mx-3 mt-6 flex flex-col rounded-lg bg-white   sm:shrink-0 sm:grow sm:basis-0">
      
      
        <svg
      className="w-full h-40 rounded-t-lg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#FF6630" // Set the stroke color here
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 8a2 2 0 00-2 2 2 2 0 002 2m0 0a2 2 0 00-2 2 2 2 0 002 2m0 0a2 2 0 00-2 2 2 2 0 002 2m-6-2a2 2 0 012-2 2 2 0 012 2m0 0a2 2 0 012-2 2 2 0 012 2"
      ></path>
    </svg>
      
      <div className="p-6">
        <p className="mb-4 text-base  text-neutral-600">
          Exciting news! Booking with us means you're not just a customer; you're a valued member of our community. We offer a transparent and friendly pricing structure, starting with a Service Call charge of $90, which goes towards the total repair cost. Have multiple appliances in need? No worries! It's just an additional $45 per appliance.
        </p>
      </div>
    </div>
    
      <div className="md:mx-3 mt-6 flex flex-col rounded-lg bg-white   sm:shrink-0 sm:grow sm:basis-0">
      <svg
      className="w-full h-40 rounded-t-lg"
      fill="#FF6630" // Set the fill color here
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1zm0 20c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm-1-16h2v8h-2zm0 10h2v2h-2z"
        fill="#FF6630" // Set the fill color here
      />
    </svg>
        <div className="p-6">
         
          <p className="mb-4 text-base text-neutral-600 text-black">
          Here's the best part – with Master Appliance Tech, you get the personal touch. Expect reminders leading up to your appointment to ensure you never miss a beat. We'll send you a friendly email 24 hours before your scheduled time.


          </p>
        </div>
        
      </div>
      <div className="md:mx-3 mt-6 flex flex-col rounded-lg bg-white   sm:shrink-0 sm:grow sm:basis-0">
      <svg
      className="w-full h-40 rounded-t-lg"
      fill="#FF6630" // Set the fill color here
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-1.471 0-2.834-.429-4-1.163V9.163C9.166 8.429 10.529 8 12 8s2.834.429 4 1.163v9.674c-1.166.734-2.429 1.163-4 1.163zm1-12h2v2h-2zm0 4h2v6h-2z"
        fill="#FF6630" // Set the fill color here
      />
    </svg>
        <div className="p-6">
          
          <p className="mb-4 text-base text-neutral-600 ">
          Choose Master Appliance Tech for a service that goes beyond fixing appliances – it's about building a relationship with a local expert who cares. Book now, and let's get your appliances back in top-notch shape!


          </p>
        </div>
       
      </div>
      
    </div>
  )
}
