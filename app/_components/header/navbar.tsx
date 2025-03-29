'use client'

import { JSX, MouseEvent, useEffect, useState } from "react";
import { Navigation } from "userInterface";
import navigationData from "../../_assets/texts/navigation.json";
import { oranienbaum } from "../../_lib/fonts";
import styles from "../../_styles/components/header/navbar.module.css";
import NavbarButton from "./navbarButton";

const navigation = navigationData as Navigation;

export default function Navbar(): JSX.Element {
    const [open, setOpen] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(open => !open);
    }

    const handleClickLink = () => {
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
            <nav className={`w-full ${oranienbaum.className}`}>
                <div className="flex justify-end items-center">
                    <ol className="hidden md:flex flex-row gap-x-12">
                        {navigation.items.map((item, index) => (
                            <li key={index} className="list-decimal text-baby-blue">
                                <a href={item.href} className="py-2 pl-1 text-baby-blue hover:no-underline! hover:text-midnight-blue! focus:text-blue!">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ol>
                    <a href="/resume.pdf" role="button" target="_blank" rel="noopener noreferrer" className="hidden md:block btn btn-secondary ml-6 mr-0! py-2! hover:text-primary!">Resume</a>
                    <NavbarButton open={open} onClick={handleClick} />
                </div>

                <div className={`${styles.containerSidebar} w-3/4 sm:w-1/2 bg-blue grid content-center place-items-center text-lg ${open ? styles.open : ''}`}>
                    <ol className="grid gap-y-6 p-8 text-center">
                        {navigation.items.map((item, index) => (
                            <li key={index} className="list-decimal list-inside text-baby-blue">
                                <a href={item.href} onClick={handleClickLink} className="py-2 pl-1 text-baby-blue hover:no-underline! hover:text-midnight-blue!">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ol>
                    <a href="/resume.pdf" role="button" target="_blank" rel="noopener noreferrer" className="btn btn-secondary py-2! px-8! m-0!">Resume</a>
                </div>
            </nav>
        </>
    );
}
