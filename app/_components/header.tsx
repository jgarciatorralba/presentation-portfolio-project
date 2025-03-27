'use client'

import { JSX, useEffect, useState } from "react";
import Navbar from "../_components/navbar";
import styles from "../_styles/components/header.module.css";

export default function Header(): JSX.Element {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0 ? true : false);
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
