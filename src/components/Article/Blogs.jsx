"use client"
import Image from 'next/image';
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import {Card, CardBody} from "@nextui-org/react";


export default function Blogs({ blogs }) {

    return (
        <div className='px-6 mb-20'>
            <div className='flex flex-col justify-center items-center bg-[#1A3677] py-28 mb-10'>
                <h2 className='md:text-5xl text-3xl font-bold text-white'>Articles </h2>
                <div className='flex items-center text-white gap-3 pt-3'>
                    <Link className='hover:text-[#3AAE3A] text-[#8689A2]' href="/">Home</Link>
                    <IoIosArrowForward />
                    <p className='text-[#3AAE3A]'>Article</p>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    blogs?.map(news => <Card key={news?.id} >
                        <figure
                        ><Image width={400} height={400} src={news?.img} alt="News image" /></figure>
                        <CardBody>
                            <h2 className="card-title">{news?.title}</h2>
                            <p>
                                {news?.des && news.des.split(' ').slice(0, 10).join(' ')}
                                {news?.des && news.des.split(' ').length > 10 ? ' ...' : ''}
                            </p>


                            <div className="card-actions justify-start">
                               
                                <Link href={{ pathname: "/blog", query: { id: news?.id } }} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded group">
                                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#FF6600] opacity-100 group-hover:-translate-x-8"></span>
                                        <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white font-medium text-xs uppercase" >Read More</span>
                                        <span class="absolute inset-0 border-2 border-white rounded"></span>
                                    </Link>
                            </div>
                        </CardBody>
                    </Card>)
                }
            </div>


            <style jsx>{`
        .image-zoom:hover {
          transform: scale(1.1); /* Apply zoom effect to card text on hover */
          transition: transform 0.5s ease; /* Smooth transition */
        }
      `}</style>
        </div>
    )
}
