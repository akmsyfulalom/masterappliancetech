'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

export default function BlogDetail({blog}) {

    return (
        <div className='px-6 mb-20'>
            <div className='flex flex-col justify-center items-center bg-[#1A3677] py-28 mb-10'>
                <h2 className='md:text-5xl text-3xl font-bold text-white'>Article </h2>
                <div className='flex items-center text-white gap-3 pt-3'>
                    <Link className='hover:text-[#3AAE3A] text-[#8689A2]' href="/">Home</Link>
                    <IoIosArrowForward />
                    <Link className='hover:text-[#3AAE3A] text-[#8689A2]' href="/article">Articles</Link>
                    <IoIosArrowForward />
                    <p className='text-[#3AAE3A]'>Article Detail</p>

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
