import Image from 'next/image';
import { ReactNode } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";

const gitHubProfile = "https://github.com/jgarciatorralba";
const linkedInProfile = "https://www.linkedin.com/in/jgarciatorralba/?locale=en_US";

export default function About(): ReactNode {
    return (
        <Section name="about">
            <div>
                <div className="section-container">
                    <h2 className={`header ${oranienbaum.className}`}>About</h2>
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="sm:mb-8 lg:mb-0">
                            <p className="paragraph">Hi, my name is Jorge and I develop digital products for a living. I've always been interested in technology for as long as I can remember, but it wasn't until 2020 that I decided to leave the automotive industry and try my luck with programming.
                            </p>
                            <p className="paragraph">Here are some technologies that I've worked with or that I'm eager to perfect at some point along my professional journey:</p>
                            <ul className="list-[square] list-inside grid grid-cols-2 sm:grid-cols-[1fr_1fr_0.5fr]">
                                <li className="sm:col-span-1">PHP</li>
                                <li className="sm:col-span-2">Symfony</li>
                                <li className="sm:col-span-1">JavaScript</li>
                                <li className="sm:col-span-2">TypeScript</li>
                                <li className="sm:col-span-1">React</li>
                                <li className="sm:col-span-2">Next.js</li>
                            </ul>
                        </div>
                        <div className="w-[250px] md:min-w-[300px] lg:order-first mx-auto">
                            <Image src="/pic.png" alt="Front Picture" width={300} height={300} className="rounded-md sepia-[.35] contrast-[1.1] border border-midnightBlue" quality={100} />
                            <div className="flex flex-row justify-start py-2">
                                <a className="transition hover:scale-110 w-100" href={gitHubProfile} rel="noopener noreferrer" target="_blank"><Image src="/github.svg" quality={100} alt="GitHub Logo" width={50} height={50} /></a>
                                <a className="transition hover:scale-110 w-100" href={linkedInProfile} rel="noopener noreferrer" target="_blank"><Image src="/linkedin.svg" quality={100} alt="LinkedIn Logo" width={50} height={50} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
