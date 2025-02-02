import { ReactNode } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";

export default function About(): ReactNode {
    return (
        <Section name="about">
            <div>
                <div className="section-container">
                    <h2 className={`header ${oranienbaum.className}`}>About</h2>
                    <p className="mb-4">About section...</p>
                </div>
            </div>
        </Section>
    );
}
