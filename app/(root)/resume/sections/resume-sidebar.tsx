import { oranienbaum } from "@lib/fonts";
import type { ResumeBasics } from "@lib/types/resume";
import Image from "next/image";
import type { JSX } from "react";

export default function ResumeSidebar({ basics }: { basics: ResumeBasics }): JSX.Element {
    return (
        <aside className="lg:sticky lg:top-32 lg:self-start">
            <Image
                src="/pic-resume.png"
                alt=""
                width={300}
                height={300}
                className="mb-6 aspect-square w-full max-w-75 rounded-lg object-cover lg:w-75 lg:max-w-none"
                priority
            />
            <h1 className={`header mb-2 ${oranienbaum.className}`}>
                {basics.name}
            </h1>
            <p className="paragraph">{basics.summary}</p>

            <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                    <Image src="/pin.svg" alt="" width={20} height={20} className="size-5 shrink-0" />
                    <address className="not-italic">
                        {basics.location.city}, {basics.location.countryCode}
                    </address>
                </li>
                <li className="flex items-center gap-2">
                    <Image src="/globe.svg" alt="" width={20} height={20} className="size-5 shrink-0" />
                    <a href={basics.url} target="_blank" rel="noopener noreferrer" className="break-all text-vividBlue underline decoration-2 underline-offset-2">
                        {basics.url}
                    </a>
                </li>
                {basics.profiles.map(profile => (
                    <li key={profile.network} className="flex items-center gap-2">
                        <Image
                            src={`/${profile.network.toLowerCase()}.svg`}
                            alt=""
                            width={20}
                            height={20}
                            className="size-5 shrink-0"
                        />
                        <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-vividBlue underline decoration-2 underline-offset-2">
                            {profile.username}
                        </a>
                    </li>
                ))}
            </ul>

            <a
                href="/resume.pdf"
                download
                className="btn mx-auto! mt-6! mb-4 flex w-fit items-center gap-2 no-underline! sm:mt-4"
                aria-label="Download resume PDF"
            >
                <Image src="/download.svg" alt="" width={24} height={24} className="-top-1 relative" />
                Download
            </a>
        </aside>
    );
}
