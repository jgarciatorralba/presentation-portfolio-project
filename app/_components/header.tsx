'use client'

import { ReactNode, useEffect, useState } from "react";
import styles from "../styles/header.module.css";
import Navbar from "./navbar";

export default function Header(): ReactNode {
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
