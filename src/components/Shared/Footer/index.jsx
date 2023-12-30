"use client"
import Link from 'next/link'
import { Input } from "@nextui-org/react";
export default function Footer() {
    const backgroundImageUrl = "https://wphix.com/template/airvice-prv/airvice/assets/img/footer/footer-bg.jpg";

    const variants = ["underlined"]
    return (
        <div>



            <footer style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                className="flex flex-col items-center  text-center text-white">
                <div className="container px-6 pt-6">
                    <div className="mb-6 flex justify-center">
                        
                        <Link
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </Link >

                        <Link
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </Link >

                        <Link
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd" />
                            </svg>
                        </Link >

                        <Link
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link >

                        <Link
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </Link >


                    </div>


                    <div>
                        <form action="">
                            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
                                <div className="md:mb-6 md:ml-auto">
                                    <p>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="relative md:mb-8" >
                                    <Input type="email" variant={variants} className='!bg-transparent' label="Type Your Email Here..." />

                                </div>


                                <div className="mb-6 md:mr-auto">
                                    <button type="submit" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded group">
                                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#FF6600] opacity-100 group-hover:-translate-x-8"></span>
                                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-medium text-xs uppercase" >Subscribe</span>
                                        <span class="absolute inset-0 border-2 border-white rounded"></span>
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>



                    <div className="mb-6">
                        <p>
                        "Experience top-tier appliance repair with Cody Zimmerman, a seasoned industry expert since 2003. Factory Authorized for leading brands like Bosch, Whirlpool, and Samsung, ensuring unmatched expertise for your repairs."
                        </p>
                    </div>


                    <div className="grid md:grid-cols-2 ">
                        <div className="mb-6">
                            <h5 className="mb-2.5 font-bold uppercase">About Us</h5>

                            <div className="mb-0 text-justify">
                                <p>
                                    Welcome to our distinguished appliance repair service, proudly owned and operated by Cody Zimmerman—an industry professional with a rich background dating back to 2003. Cody's expertise extends to Factory Authorization for renowned brands, including Bosch, Thermador, Dacor, Whirlpool, Maytag, KitchenAid, Frigidaire, Electrolux, GE, Samsung, LG, and more. This prestigious authorization has granted him exclusive access to Factory Training programs organized by these manufacturers, significantly enhancing his skills.

                                </p>

                            </div>
                        </div>

                     

                        <div className="mb-6">
                            <h5 className="mb-2.5 font-bold uppercase">Company</h5>

                            <ul className="mb-0 list-none">
                                 <li>
                                    <Link href="/team" className="text-white underline">Team</Link >
                                </li>
                                <li>
                                    <Link href="/reviews" className="text-white underline">Our Reviews</Link >
                                </li>
                                <li>
                                    <Link href="/termsAndConditions" className="text-white underline">Terms And Conditions</Link >
                                </li>
                                <li>
                                    <Link href="/privacyPolicy" className="text-white underline">Privacy Policy</Link >
                                </li>
                                <li>
                                    <Link href="/refoundPolicyAndConditions" className="text-white underline">Refound Policy and conditions</Link >
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="w-full p-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:
                    <Link target='_blank' className="text-white" href="https://akmsyful.vercel.app/"> Digitize Solutions</Link >
                </div>

            </footer>

        </div>


    )
}
