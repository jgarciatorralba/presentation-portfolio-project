import { ReactNode } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";

export default function Experience(): ReactNode {
    return (
        <Section name="experience">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Experience</h2>
                <p className="paragraph">Experience section.</p>
            </div>
        </Section>
    );
}
