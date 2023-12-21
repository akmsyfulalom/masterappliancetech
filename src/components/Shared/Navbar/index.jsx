/* eslint-disable react/jsx-no-undef */
"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Link from "next/link"

export default function PrimaryNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const menuItems = [

    //     "Home",
    //     "Booking",
    //     "About Us",
    //     "Our Article",
    //     "Contact Us",
    //     "Log Out",
    // ];

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
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="bg-black text-white">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                 <Link href={'/'}>
                <NavbarBrand>
                   
                    <Image src={"/MasterApplianceTechLogo.jpg"} alt="MasterApplianceTechLogo" width={90} height={100} />
                    <p className="font-bold text-inherit">Master Appliance</p>
                   
                </NavbarBrand>
                </Link>
            </NavbarContent>


            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    primaryMenuItems?.map((primaryMenuItem) => <NavbarItem key={primaryMenuItem?.id}>
                        <Link className="text-white" color="foreground" href={primaryMenuItem?.link}>
                            {primaryMenuItem?.title}
                        </Link>
                    </NavbarItem>)
                }
                {/* <NavbarItem >
                    <Link className="text-white" color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link className="text-white" href="#" aria-current="page">
                        Booking
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" color="foreground" href="#">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" color="foreground" href="#">
                        Our Article
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" color="foreground" href="#">
                        Contact Us
                    </Link>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {primaryMenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === NavbarMenuItem.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item?.link}
                            size="lg"
                        >
                            {item?.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
