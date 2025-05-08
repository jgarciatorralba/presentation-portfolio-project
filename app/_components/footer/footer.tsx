import { JSX } from "react";

const url: string = "https://brittanychiang.com";
const year: Number = new Date().getFullYear();

export default function Footer(): JSX.Element {
    return (
        <footer>
            <div className="py-2 text-center">
                <p><small>{`© ${year} Jorge García Torralba`}</small></p>
                <p><small>
                    Inspired by the work of{" "}
                    <a
                        href={url}
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
