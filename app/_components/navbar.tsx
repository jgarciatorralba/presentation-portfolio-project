import { ReactNode } from "react";
import styles from "../styles/navbar.module.css";
import NavbarButton from "./navbarButton";

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar(): ReactNode {
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
                    <NavbarButton />
                </div>

                <div className={`${styles.containerSidebar} w-3/4 sm:w-1/2 bg-blue grid place-items-center`}>
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
