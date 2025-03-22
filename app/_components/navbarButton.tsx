'use client'

import { JSX, MouseEvent, useEffect, useRef } from "react";
import Button from "./button";

interface NavbarButtonProps {
    open: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function NavbarButton({ open, onClick }: NavbarButtonProps): JSX.Element {
    const timeoutRef = useRef<number | null>(null);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick(e);

        const button = e.currentTarget;
        timeoutRef.current = window.setTimeout(() => {
            button.blur();
        }, 150);
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <Button htmlType="button" onClick={handleClick} className="ml-4 p-2 focus:bg-midnight-blue rounded-xs md:hidden z-40">
            <svg id="navClosed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className={`${open ? 'hidden' : ''} h-8 w-8`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg id="navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className={`${!open ? 'hidden' : ''} h-8 w-8`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </Button>
    );
}
