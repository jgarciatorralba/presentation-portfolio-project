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

    const handleClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
        setOpen(open => !open);
    }

    useEffect(() => {
        const body = document.body;
        const blurredBackground = body.querySelector('.blurred-background');

        if (open) {
            body.classList.add('overflow-hidden');
            blurredBackground?.classList.add('active');
        } else {
            body.classList.remove('overflow-hidden');
            blurredBackground?.classList.remove('active');
        }

        return () => {
            body.classList.remove('overflow-hidden');
            blurredBackground?.classList.remove('active');
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
                                <a href={item.href} onClick={handleClickLink} className="py-2 pl-1 text-midnightBlue hover:no-underline hover:text-babyBlue">
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
