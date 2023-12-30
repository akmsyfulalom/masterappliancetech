import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image'
import HowItWorks from "@/components/About/HowItWorks";
import PropertyServiceSectionForAbout from "@/components/Home/PropertyServiceSection";

export default function page() {
  return (
    <div className="">
      <div className="relative ">
        <Image
          isZoomed
          width={600}
          height={900}
          className=""
          alt="About Banner"
          src="/images/aboutpageimage.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1d284b] opacity-85"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl lg:text-5xl font-bold">ABOUT US</div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500   px-6 pb-3">
          <p className="text-center text-white font-bold pt-4 flex items-center justify-center gap-2">
            <Link href="/">Home</Link>
            <FaLongArrowAltRight />
            
            <span>About</span>
          </p>
        </div>
      </div>
      <PropertyServiceSectionForAbout />
      <HowItWorks></HowItWorks>
     
    </div>
  )
}
