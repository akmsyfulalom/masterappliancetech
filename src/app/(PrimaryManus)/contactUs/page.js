import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image'
import ContactUs from "@/components/ContactUs/ContactUs";
import ContactMapAndMailMobile from "@/components/ContactUs/ContactMapAndMailMobile";

export default function page() {
  return (
    <div>
      <div className="relative ">
        <Image
          isZoomed
          width={1200}
          height={1000}
          className=""
          alt="About Banner"
          src="https://i.ibb.co/wwwV29P/page-banner.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1d284b] opacity-85"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl lg:text-7xl font-bold">CONTACT US</div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500 w-[200px] h-[50px]  " style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}>
          <p className="text-center text-white font-bold pt-4 flex items-center justify-center gap-2">
            <Link href="/">Home</Link>
            <FaLongArrowAltRight />
            <span>Contact </span>
          </p>
        </div>
      </div>
      <ContactUs />
      <ContactMapAndMailMobile />
    </div>
  )
}
