import { JSX } from "react";
import { TabItemProps } from "userInterface";
import Section from "../../_components/section";
import ExperienceTabContent from "../../_components/sections/experience/experienceTabContent";
import Tabs from "../../_components/tabs/tabs";
import { experienceParagraphs, experiences } from "../../_lib/constants";
import { oranienbaum } from "../../_lib/fonts";

const experienceItems: TabItemProps[] = Object.entries(experiences).map(([name, experience], index) => {
    return {
        active: index === 0,
        label: name,
        component: <ExperienceTabContent {...experience} />,
    };
});

export default function Experience(): JSX.Element {
    return (
        <Section name="experience">
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
