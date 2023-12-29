import HowItWorks from "@/components/About/HowItWorks";
import PropertyServiceAbout from "@/components/About/PropertyServiceAbout";
import Team from "@/components/About/Team";
import Image from 'next/image';

export default function page() {
  return (
    <div className="">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white sm:text-xl lg:text-4xl font-bold">ABOUT US</div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500 w-[150px] lg:h-[50px] h-[3  0px] " style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}>
          <p className="text-center text-white font-bold py-2">
            <span>Home</span>
            {/* <span>About</span> */}
          </p>
        </div>
      </div>
      <PropertyServiceAbout />
      <HowItWorks></HowItWorks>
      <Team></Team>
    </div>
  )
}
