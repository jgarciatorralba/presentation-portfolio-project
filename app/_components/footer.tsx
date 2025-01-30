import { ReactNode } from "react";

export default function Footer(): ReactNode {
    const year: Number = new Date().getFullYear();

    return (
        <footer>
            <div className="px-2 sm:px-6 lg:px-8 py-2 text-center">
                <p><small>{`© ${year} Jorge García Torralba`}</small></p>
                <p><small>
                    Inspired by the work of{" "}
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Brittany Chiang
                    </a>
                </small></p>
            </div>
        </footer>
    );
}
