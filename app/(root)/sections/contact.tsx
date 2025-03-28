import { JSX } from "react";
import Section from "../../_components/section";
import { oranienbaum } from "../../_lib/fonts";

const email = "jgarciatorralba@gmail.com";

export default function Contact(): JSX.Element {
    return (
        <Section name="contact">
            <div className="section-container mt-18 sm:mt-0 mb-24 sm:mb-36 md:mb-48 lg:mb-12">
                <h2 className={`header ${oranienbaum.className}`}>Contact</h2>
                <p className="paragraph">Feel free to reach out to discuss full-remote opportunities or any other coding-related topic, and I'll get back to you as soon as I can.</p>
                <div className="flex justify-center py-8">
                    <a href={`mailto:${email}`} role="button" target="_blank" rel="noopener noreferrer" className="btn">Say something</a>
                </div>
            </div>
        </Section>
    );
}
