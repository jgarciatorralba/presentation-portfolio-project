import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { oranienbaum } from "./_lib/fonts";
import "./_styles/globals.css";

export default function NotFound(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className={`${oranienbaum.className} header`}>Not Found</h1>
            <p className="paragraph">
                Nothing to see here... Shall we try again?<br />
                To <Link className="paragraph font-bold" href="/">home</Link> page.
            </p>
            <Image
                src="/not-found.svg"
                alt="Not Found"
                width={250}
                height={250}
                quality={100}
                priority
            />
        </div >
    );
}
