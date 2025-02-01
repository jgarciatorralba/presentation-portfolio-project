import { ReactNode } from "react";
import NavbarButton from "./navbarButton";

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar(): ReactNode {
    return (
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
        </nav>
    );
}
