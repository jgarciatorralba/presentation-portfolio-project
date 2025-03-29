'use client'

import { JSX, useEffect, useState } from "react";
import styles from "../../_styles/components/header/header.module.css";
import Navbar from "./navbar";

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
