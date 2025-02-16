import { JSX } from "react";
import experiences from "../../_assets/experiences.json";
import Section from "../../_components/section";
import TabPanel from "../../_components/tabPanel";
import Tabs, { TabContentProps } from "../../_components/tabs";
import { oranienbaum } from "../fonts";

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
