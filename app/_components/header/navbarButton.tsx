"use client"

import { JSX, MouseEvent, useEffect, useRef } from "react";
import { NavbarButtonProps } from "userInterface";
import Button from "../button";

export default function NavbarButton({ open, onClick }: NavbarButtonProps): JSX.Element {
    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const timeoutRef = useRef<number | null>(null);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick(e);

        const button = e.currentTarget;
        timeoutRef.current = window.setTimeout(() => {
            button.blur();
        }, 150);
    }

    return (
        <Button htmlType="button" onClick={handleClick} className="ml-4 p-2 focus:bg-midnight-blue rounded-xs md:hidden z-40">
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="var(--primary)"
                className="transition-all duration-300 ease-in-out"
            >
                <rect
                    x="4"
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    transform={
                        open
                            ? "translate(-3 3) rotate(45)"
                            : ""
                    }
                    className="transition-all duration-300 origin-center"
                />
                <rect
                    x="4"
                    y="15"
                    width="16"
                    height="2"
                    rx="1"
                    transform={
                        open
                            ? "translate(-3 -3) rotate(-45)"
                            : ""
                    }
                    className="transition-all duration-300 origin-center"
                />
                <rect
                    x="4"
                    y="11"
                    width="16"
                    height="2"
                    rx="1"
                    opacity={open ? 0 : 1}
                    className="transition-all duration-300"
                />
            </svg>
        </Button>
    );
}
