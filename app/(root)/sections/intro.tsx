import Section from "@components/section";
import { introParagraphs, introSubheading } from "@lib/constants";
import { oranienbaum } from "@lib/fonts";
import { JSX } from "react";

export default function Intro(): JSX.Element {
    return (
        <Section name="intro">
            <div className="h-screen flex items-center">
                <div className="sm:px-12 md:px-16 lg:px-32 xl:px-64 py-12">
                    <h1 className={`${oranienbaum.className} mb-4 text-2xl`}>Hey there!</h1>
                    <h2 className="text-3xl sm:text-5xl mb-4">
                        <span className="text-midnight-blue">{introSubheading.highlighted}</span>{' '}{introSubheading.normal}
                    </h2>
                    {introParagraphs.map((paragraph, index) => (
                        <p key={index} className="paragraph">{paragraph}</p>
                    ))}
                </div>
            </div>
        </Section>
    );
}
