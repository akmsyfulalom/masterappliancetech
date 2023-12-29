/* eslint-disable react/jsx-no-undef */
"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Link from "next/link"
import PrimaryButtonForNavbar from "@/components/Buttons/PrimaryButtonForNavbar";

export default function PrimaryNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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


            <NavbarContent className="hidden sm:flex gap-4 justify-center " justify="center">
                {
                    primaryMenuItems?.map((primaryMenuItem) => <NavbarItem key={primaryMenuItem?.id}>
                        <Link className="text-black" color="foreground" href={primaryMenuItem?.link}>
                            {primaryMenuItem?.title}
                        </Link>
                    </NavbarItem>)
                }
               
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://clienthub.getjobber.com/client_hubs/623f04d2-9301-4ef0-b667-c67229c82601/login/new?source=share_login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                <PrimaryButtonForNavbar buttonTitle={'Get Started'} buttonLink={'/booking#bookForm'} />
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
