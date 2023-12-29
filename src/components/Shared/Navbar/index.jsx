/* eslint-disable react/jsx-no-undef */
"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Link from "next/link"
import PrimaryButtonForNavbar from "@/components/Buttons/PrimaryButtonForNavbar";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()
    console.log(router)

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-balck text-dark my-2`} onClick={handleClick} >
            {title}

            <span className={`h-[1px] inline-block absolute bg-black left-0 -bottom-0.5 group-hover:w-full transition-[width] case duration-300 ${router === href ? 'w-full' : 'w-0'} bg-dark`}>&nbsp;</span>
        </button>
    )
}



const CustomLink = ({ href, title, className = "" }) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={`${className} relative group `}>
            {title}

            <span className={`h-[1px] inline-block absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] case duration-300 ${pathname === href ? 'w-full' : 'w-0'} bg-black`}>&nbsp;</span>
        </Link>
    )
}

export default function PrimaryNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    const primaryMenuItems = [
        {
            id: 1,
            title: "Home",
            link: "/"
        },
        {
            id: 2,
            title: "Booking",
            link: "/booking"
        },
        {
            id: 3,
            title: "About Us",
            link: "/aboutUs"
        },
        {
            id: 4,
            title: "Contact Us",
            link: "/contactUs"
        },
        {
            id: 5,
            title: "Article",
            link: "/article"
        }

    ]

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="bg-white text-black shadow-2xl">
            <NavbarContent >
                <button className=" flex md:hidden flex-col justify-center items-center" onClick={handleClick}>
                    <span className={`bg-dark bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-dark bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0 : ' : 'opacity-100'}`}></span>
                    <span className={`bg-dark bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>
                <Link href={'/'}>
                    <NavbarBrand>

                        <Image src={"/MasterApplianceTechLogo.jpg"} alt="MasterApplianceTechLogo" width={90} height={100} />
                        <p className="font-bold text-inherit">Master Appliance</p>

                    </NavbarBrand>
                </Link>
            </NavbarContent>


            <NavbarContent className="hidden sm:flex gap-4 justify-center " justify="center">
                
                <div className="w-full md:flex hidden justify-between items-center ">

                    <nav>
                        <CustomLink href="/" title="Home" className="mr-2" />
                        <CustomLink href="/booking" title="Booking" className="mx-4" />
                        <CustomLink href="/aboutUs " title="About" className="mx-4" />
                        <CustomLink href="/contactUs" title="Contact" className="ml-4" />
                        <CustomLink href="/article" title="Article" className="ml-4" />
                    </nav>


                </div>

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://clienthub.getjobber.com/client_hubs/623f04d2-9301-4ef0-b667-c67229c82601/login/new?source=share_login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <PrimaryButtonForNavbar buttonTitle={'Get Started'} buttonLink={'/booking#bookForm'} />
                </NavbarItem>
            </NavbarContent>
            
            {
                isOpen ?

                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}

                        className="min-w-[70vw] flex flex-col justify-between items-center fixed top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 bg-black/75 rounded-lg backdrop-blur-md py-32">

                        <nav className="flex flex-col justify-center items-center text-white">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/booking" title="Booking " className="" toggle={handleClick} />
                            <CustomMobileLink href="/aboutUs" title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href="/contactUs" title="Contact " className="" toggle={handleClick} />
                            <CustomMobileLink href="/article" title="Article " className="" toggle={handleClick} />
                        </nav>


                    </motion.div>
                    :
                    null
            }

        </Navbar>
    );
}
