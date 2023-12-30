'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

export default function BlogDetail({blog}) {

    return (
        <div className='px-6 mb-20'>
           <div className="relative  ">
        <Image
          isZoomed
          width={600}
          height={900}
          className=""
          alt="About Banner"
          src="/images/aboutpageimage.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1d284b] opacity-85"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl lg:text-5xl font-bold">Article</div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500  px-6 pb-3">
          <p className="text-center text-white font-bold pt-4 flex items-center justify-center gap-2">
            <Link href="/">Home</Link>
            <FaLongArrowAltRight />
            <Link href="/article">Article</Link>
            <FaLongArrowAltRight />
            <span>Detail</span>
          </p>
        </div>
      </div>

            <div className=" bg-gray-50">
                <div className="py-6 mx-auto">

                    <div className="max-w-6xl pb-6 mx-auto bg-gray-50">

                        <div className="block transition duration-200 ease-out transform hover:scale-110 md:hover:mb-16 hover:mb-8">
                            <Image width={500} height={500} className=" w-full shadow-sm h-1/3	" src={blog?.img} alt='detail image' />
                        </div>
                        <div className="mt-2">

                            <h1 className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline mt-10">{blog?.title}</h1>
                            <div className="font-light text-gray-600">

                                <div className="flex items-center mt-6 mb-6"><Image width={640} height={450}
                                    src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"
                                    alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                    <h1 className="font-bold text-gray-700 hover:underline">By Master Appliance</h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                            <div>
                                <p className="mt-2 md:p-8 p-1">{blog?.des}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
