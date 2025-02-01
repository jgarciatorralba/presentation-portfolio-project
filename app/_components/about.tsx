import { ReactNode } from "react";
import Section from "./section";

export default function About(): ReactNode {
    return (
        <Section name="about">
            <div>
                <div className="sm:px-12 md:px-24 lg:px-32 xl:px-64 py-12">
                    <h2 className="mb-4">About</h2>
                    <p>About section here</p>
                </div>
            </div>
        </Section>
    );
}
