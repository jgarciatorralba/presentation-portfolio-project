import Section from "@components/section";
import { contactParagraphs, email } from "@lib/constants";
import { oranienbaum } from "@lib/fonts";
import { JSX } from "react";

export default function Contact(): JSX.Element {
    return (
        <Section name="contact">
            <div className="section-container mt-18 sm:mt-0 mb-24 sm:mb-36 md:mb-48 lg:mb-12">
                <h2 className={`header ${oranienbaum.className}`}>Contact</h2>
                {contactParagraphs.map((paragraph, index) => (
                    <p key={index} className="paragraph">{paragraph}</p>
                ))}
                <div className="flex justify-center py-8">
                    <a href={`mailto:${email}`} role="button" target="_blank" rel="noopener noreferrer" className="btn">Say something</a>
                </div>
            </div>
        </Section>
    );
}
