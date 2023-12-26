"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";





export default function Topvar() {
    return (
        <Navbar position="static" className='hidden md:flex '>
            <NavbarBrand>

                <p className="font-bold text-inherit">We do not received extra charges</p>
            </NavbarBrand>
            <NavbarContent className="flex items-center justify-center gap-0.5" justify="center">
                <MdOutlineWatchLater className='text-[#FF6630] text-2xl' />
                <p>Sunday to Thursday</p>
            </NavbarContent>
            <NavbarContent justify="end">

                <NavbarItem className='flex justify-center items-center'>
                    <MdLocationPin className='text-[#FF6630] text-2xl' />
                    <p>Lakewood, Colorado</p>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
