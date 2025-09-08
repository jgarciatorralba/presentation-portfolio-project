"use client"

import Navbar from "@components/header/navbar";
import styles from "@styles/components/header/header.module.css";
import { JSX, useEffect, useState } from "react";

export default function Header(): JSX.Element {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header>
            <div className={`z-30 px-6 md:px-12 ${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <Navbar />
            </div>
        </header>
    );
}
