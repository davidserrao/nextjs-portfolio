"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Projects',
        path: '#projects',
    },
    {
        title: 'Contact',
        path: '#contact',
    },
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap item-center justify-between mx-auto px-4 py-4 md:px-8 md:py-8'>
            <Link href={"/"} className="md:ml-4">
                <Image
                    src="/images/DS-Logo.png"
                    alt="my-logo"
                    className=""
                    width={50}
                    height={50}
                />
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='w-5 h-5' />
                            </button>
                    ) : (
                        <button 
                            onClick={() => setNavbarOpen(false)} 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='w-5 h-5' />
                            </button>
                    )
                }
            
            </div>
            <div className='menu hidden md:block md:w-auto'>
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar