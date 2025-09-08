"use client";

import Tab from "@components/tabs/tab";
import TabPanel from "@components/tabs/tabPanel";
import { JSX, useState } from "react";
import { TabItemProps, TabsProps } from "userInterface";

export default function Tabs({ items }: TabsProps): JSX.Element {
    const [activeTab, setActiveTab] = useState(findActiveTab(items));

    function findActiveTab(tabs: TabItemProps[]): number {
        const index = tabs.findIndex((tab) => tab.active);
        return index !== -1 ? index : 0;
    }

    return (
        <div className="md:flex w-full">
            <div className="tab-list" role="tablist">
                {items.map(({ label }, i) => (
                    <Tab key={`tab-${i}`} currentTab={i} activeTab={activeTab} setActiveTab={setActiveTab}>
                        {label}
                    </Tab>
                ))}
            </div>

            <div className="w-full relative min-h-[28lh] xs:min-h-[24lh] lg:min-h-[18lh] xl:min-h-[14lh]">
                {items.map(({ component }, i) => (
                    <TabPanel key={`tabpanel-${i}`} currentPanel={i} activePanel={activeTab}>
                        {component}
                    </TabPanel>
                ))}
            </div>
        </div>
    );
}
