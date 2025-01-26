import { ReactNode } from "react";

export default function Footer(): ReactNode {
    const year: Number = new Date().getFullYear();

    return (
        <footer>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
                <p>{`© ${year} Jorge García Torralba`}</p>
                <p>
                    Inspired by the work of{" "}
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Brittany Chiang
                    </a>
                </p>
            </div>
        </footer>
    );
}
