import Section from "@components/section";
import ExperienceTabContent from "@components/sections/experience/experienceTabContent";
import Tabs from "@components/tabs/tabs";
import { experienceParagraphs, experiences } from "@lib/constants";
import { oranienbaum } from "@lib/fonts";
import { JSX } from "react";
import { TabItemProps } from "userInterface";

const experienceItems: TabItemProps[] = Object.entries(experiences).map(([name, experience], index) => {
    return {
        active: index === 0,
        label: name,
        component: <ExperienceTabContent {...experience} />,
    };
});

export default function Experience(): JSX.Element {
    return (
        <Section id="experience">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Experience</h2>
                {experienceParagraphs.map((paragraph, index) => (
                    <p key={index} className="paragraph">{paragraph}</p>
                ))}

                <Tabs items={experienceItems} />
            </div>
        </Section>
    );
}
