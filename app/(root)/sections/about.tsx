import Image from 'next/image';
import { JSX } from "react";
import Section from "../../_components/section";
import { oranienbaum } from "../fonts";

const socialNetworks: Array<{ name: string, url: string, alt: string }> = [
    { name: "GitHub", url: "https://github.com/jgarciatorralba", alt: "GitHub Logo" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jgarciatorralba/?locale=en_US", alt: "LinkedIn Logo" }
];

const technologies: Array<string> = [
    "PHP",
    "Symfony",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js"
];

export default function About(): JSX.Element {
    return (
        <Section name="about">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>About</h2>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="sm:mb-8 lg:mb-0">
                        <p className="paragraph">Hi, my name is Jorge and I develop digital products for a living. I've always been interested in technology for as long as I can remember, but it wasn't until 2020 that I decided to leave the automotive industry and try my luck with programming.
                        </p>
                        <p className="paragraph">Here are some technologies that I've worked with or that I'm eager to perfect at some point along my professional journey:</p>
                        <ul className="list-[square] list-inside grid grid-cols-2 sm:grid-cols-[1fr_1fr_0.5fr]">
                            {technologies.map((technology, index) => (
                                <li key={`${technology}-${index}`}>{technology}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[250px] md:min-w-[300px] lg:order-first mx-auto">
                        <Image src="/pic.png" alt="Front Picture" width={300} height={300} className="rounded-md sepia-[.35] contrast-[1.1] border border-midnight-blue" quality={100} priority={true} />
                        <div className="flex flex-row justify-start py-2">
                            {socialNetworks.map((network, index) => (
                                <a
                                    key={`${network.name}-${index}`}
                                    className="transition hover:scale-110"
                                    href={network.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Image src={`/${network.name.toLowerCase()}.svg`} quality={100} alt={network.alt} width={50} height={50} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
