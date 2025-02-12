'use client'

import { JSX } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";
import Tabs from "./tabs";

export default function Experience(): JSX.Element {
    return (
        <Section name="experience">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Experience</h2>
                <p className="paragraph">Companies I've worked for.</p>

                <Tabs
                    children={[
                        { active: true, label: "eDreams", component: "First tab" },
                        { active: false, label: "Adkomo", component: "Second tab" },
                        { active: false, label: "SII Concatel", component: "Third tab" },
                        { active: false, label: "Òmada Interactiva", component: "Fourth tab" },
                        { active: false, label: "Inbenta", component: "Fifth tab" }
                    ]}
                />
            </div>
        </Section>
    );
}
