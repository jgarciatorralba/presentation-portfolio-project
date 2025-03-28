import { Experiences } from "experiences";
import { JSX } from "react";
import { TabItemProps } from "userInterface";
import experiencesData from "../../_assets/texts/experiences.json";
import ExperienceComponent from "../../_components/experience";
import Section from "../../_components/section";
import Tabs from "../../_components/tabs";
import { oranienbaum } from "../../_lib/fonts";

const experiences = experiencesData as Experiences;
const experienceItems: TabItemProps[] = Object.entries(experiences).map(([name, experience], index) => {
    return {
        active: index === 0,
        label: name,
        component: <ExperienceComponent {...experience} />,
    };
});

export default function Experience(): JSX.Element {
    return (
        <Section name="experience">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Experience</h2>
                <p className="paragraph">Companies I've worked for.</p>

                <Tabs items={experienceItems} />
            </div>
        </Section>
    );
}
