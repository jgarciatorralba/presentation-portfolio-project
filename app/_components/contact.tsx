import { ReactNode } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";

const email = "jgarciatorralba@gmail.com";

export default function Contact(): ReactNode {
    return (
        <Section name="contact">
            <div className="section-container mb-24 sm:mb-12">
                <h2 className={`header ${oranienbaum.className}`}>Contact</h2>
                <p className="paragraph">Feel free to reach out to discuss full-remote opportunities or any other coding-related topic, and I'll get back to you as soon as I can.</p>
                <div className="flex justify-center py-8">
                    <a href={`mailto:${email}`} role="button" target="_blank" rel="noopener noreferrer" className="button-primary">Say something</a>
                </div>
            </div>
        </Section>
    );
}
