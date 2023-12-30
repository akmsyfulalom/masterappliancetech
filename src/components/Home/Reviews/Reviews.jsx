"use client"
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Reviews({ reviews }) {

    const [expandedReviews, setExpandedReviews] = useState([]);

    // Function to toggle the expanded state of a review
    const toggleExpand = (index) => {
        const newExpandedReviews = [...expandedReviews];
        newExpandedReviews[index] = !newExpandedReviews[index];
        setExpandedReviews(newExpandedReviews);
    };
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="md:flex md:items-end md:justify-between">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Read trusted reviews from our customers
                            </h2>


                        </div>

                        <PrimaryButton buttonLink={'/google'} buttonTitle={"Read all reviews"} textColor={'#0F111A'} />


                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            reviews?.map((review, index) => <blockquote key={index} className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                                <div>
                                    <div className="flex gap-0.5 text-green-500">
                                        <svg
                                            className="h-5 w-5"
                                            fill="#FCBF02"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            className="h-5 w-5"
                                            fill="#FCBF02"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            className="h-5 w-5"
                                            fill="#FCBF02"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            className="h-5 w-5"
                                            fill="#FCBF02"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            className="h-5 w-5"
                                            fill="#FCBF02"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>



                                    </div>

                                    <div className="mt-4">
                                        <div className='flex gap-3  items-center'>
                                            <Image src={review?.profileImg} alt={review?.name} width={50} height={50} priority />
                                            <div>
                                                <p className="text-lg font-bold text-secondary sm:text-xl">{review?.name}</p>
                                                <span>{review?.time}</span>
                                            </div>
                                            <span>
                                                <svg
                                                    className="h-5 w-5 text-197afc"
                                                    fill="#197AFC"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 19a9 9 0 100-18 9 9 0 000 18zM4.293 9.293a1 1 0 011.414 0L9 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>



                                            </span>
                                        </div>

                                        <div className="mt-4 leading-relaxed text-gray-700">
                                            {/* Show only first 30 words if not expanded */}
                                            {expandedReviews[index] ? review?.desc : `${review?.desc.split(' ').slice(0, 30).join(' ')}...`}
                                            {/* Show "Read More" link/button if description is longer than 30 words */}
                                            {review?.desc.split(' ').length > 20 && (
                                                <span
                                                    className="text-197afc cursor-pointer"
                                                    onClick={() => toggleExpand(index)}
                                                >
                                                    {expandedReviews[index] ? ' ...Less ' : ' ...Read More'}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                    <Link href={review?.platform} >
                                        <div className='flex items-center gap-3'>
                                            <Image src={'/images/googleIcon.png'} alt="google icon" width={30} height={30} priority />
                                            <div className='flex flex-col '>
                                                <span className='text-sm'>Posted on</span>
                                                <span className='text-base text-primary'>Google</span>
                                            </div>
                                        </div>
                                    </Link>
                                </footer>
                            </blockquote>)
                        }





                    </div>
                </div>
            </section>
        </div>
    )
}
