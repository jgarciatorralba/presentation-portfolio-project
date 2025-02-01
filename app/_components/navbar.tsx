'use client'

import { MouseEvent, ReactNode, useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import NavbarButton from "./navbarButton";

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar(): ReactNode {
    const [open, setOpen] = useState(false);
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(open => !open);
    }

    useEffect(() => {
        const blurredBackground = document.body.querySelector('.blur-background');
        const body = document.body;

        if (open) {
            blurredBackground?.classList.add('active');
            blurredBackground?.classList.remove('hidden');
            body.classList.add('overflow-hidden');
        } else {
            blurredBackground?.classList.remove('active');
            blurredBackground?.classList.add('hidden');
            body.classList.remove('overflow-hidden');
        }

        return () => {
            blurredBackground?.classList.remove('active');
            blurredBackground?.classList.add('hidden');
            body.classList.remove('overflow-hidden');
        };
    }, [open]);

    return (
        <>
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
                    <NavbarButton open={open} onClick={handleClick} />
                </div>

                <div className={`${styles.containerSidebar} w-3/4 sm:w-1/2 bg-blue grid place-items-center ${open ? styles.open : ''}`}>
                    <ol className="grid gap-y-6 p-8">
                        {navigation.map((item, index) => (
                            <li key={index} className="list-decimal text-babyBlue">
                                <a href={item.href} className="py-2 pl-1 text-midnightBlue hover:no-underline hover:text-babyBlue">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>
        </>
    );
}
