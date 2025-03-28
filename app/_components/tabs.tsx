'use client';

import { JSX, useState } from 'react';
import { TabContentProps } from 'userInterface';
import styles from '../_styles/components/tabs.module.css';
import Tab from './tab';

export default function Tabs({ children }: { children: TabContentProps[] }): JSX.Element {
    function findActiveTab(tabs: TabContentProps[]): number {
        const index = tabs.findIndex((tab) => tab.active);
        return index !== -1 ? index : 0;
    }

    const [activeTab, setActiveTab] = useState(findActiveTab(children));

    return (
        <div className="md:flex w-full">
            <div className="tab-list" role="tablist">
                {children.map(({ label }, i) => (
                    <Tab key={`tab-${i}`} currentTab={i} activeTab={activeTab} setActiveTab={setActiveTab}>
                        {label}
                    </Tab>
                ))}
            </div>

            <div className="py-6 md:py-2 md:px-5 w-full relative min-h-[28lh] xs:min-h-[22lh] lg:min-h-[18lh] xl:min-h-[12lh]">
                {children.map(({ component }, i) => (
                    <div
                        key={i}
                        id={`tabpanel-${i}`}
                        className={`absolute ${styles.tabContent} ${i === activeTab && styles.active}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${i}`}
                    >
                        {component}
                    </div>
                ))}
            </div>
        </div>
    );
}
