import { Experiences } from "experiences";
import { JSX } from "react";
import { TabContentProps } from "userInterface";
import experiencesData from "../../_assets/texts/experiences.json";
import Section from "../../_components/section";
import TabPanel from "../../_components/tabPanel";
import Tabs from "../../_components/tabs";
import { oranienbaum } from "../../_lib/fonts";

const experiences = experiencesData as Experiences;

const experienceContents: TabContentProps[] = Object.entries(experiences).map(([name, details], index) => {
    return {
        active: index === 0,
        label: name,
        component: <TabPanel {...details} />,
    };
});

export default function Experience(): JSX.Element {
    return (
        <Section name="experience">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Experience</h2>
                <p className="paragraph">Companies I've worked for.</p>

                <Tabs children={experienceContents} />
            </div>
        </Section>
    );
}
