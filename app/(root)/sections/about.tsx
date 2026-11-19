import Section from "@components/section";
import { aboutParagraphs, socialNetworks, technologies } from "@lib/constants";
import { oranienbaum } from "@lib/fonts";
import Image from "next/image";
import { JSX } from "react";

export default function About(): JSX.Element {
    return (
        <Section id="about">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>About</h2>
                <div className="flex flex-col xl:flex-row gap-12">
                    <div className="sm:mb-8 xl:mb-0 xl:flex-1">
                        {aboutParagraphs.map((paragraph, index) => (
                            <p key={index} className="paragraph">{paragraph}</p>
                        ))}
                        <ul className="list-[square] list-inside grid grid-cols-2">
                            {technologies.items.map((technology, index) => (
                                <li key={`${technology}-${index}`}>{technology}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full max-w-[300px] xl:order-first mx-auto">
                        <Image
                            src="/pic.png"
                            alt="Front Picture"
                            width={300}
                            height={300}
                            className="w-full h-auto mx-auto rounded-md sepia-[.35] contrast-[1.1] border border-vividBlue"
                            priority={true}
                        />
                        <div className="flex flex-row justify-start py-2">
                            {Object.entries(socialNetworks).map(([name, { url }], index) => (
                                <a
                                    key={`${name}-${index}`}
                                    className="transition hover:scale-110"
                                    href={url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label={`${name} profile (opens in a new tab)`}
                                >
                                    <Image
                                        src={`/${name.toLowerCase()}.svg`}
                                        alt=""
                                        width={50}
                                        height={50}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
