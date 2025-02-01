'use client'

import { ReactNode } from "react";

export default function Navbar(): ReactNode {
    const navigation = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="w-full">
            <div className="flex justify-end items-center">
                <ol className="hidden md:flex flex-row gap-x-12">
                    {navigation.map((item, index) => (
                        <li key={index} className="list-decimal text-babyBlue">
                            <a href={item.href} className="py-2 pl-1 text-midnightBlue hover:no-underline hover:text-babyBlue">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ol>
                <button id="btnSidebarToggler" type="button" className="mx-4 p-2 focus:outline rounded-xl md:hidden">
                    <svg id="navClosed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg id="navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="hidden h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
