'use client'

import { JSX } from "react";
import { oranienbaum } from "../(root)/fonts";
import experiences from "./experiences";
import Section from "./section";
import Tabs from "./tabs";

export default function Experience(): JSX.Element {
    return (
        <Section name="experience">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Experience</h2>
                <p className="paragraph">Companies I've worked for.</p>

                <Tabs
                    children={experiences}
                />
            </div>
        </Section>
    );
}
