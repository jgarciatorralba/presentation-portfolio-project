'use client';

import { JSX, ReactNode, useState } from 'react';

interface TabsProps {
    children: TabContentProps[];
}

interface TabContentProps {
    active?: boolean;
    label: string;
    component: ReactNode;
}

export default function Tabs({ children }: TabsProps): JSX.Element {
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

            <div className="p-5 w-full">
                {children.map(({ component }, i) => (
                    <div
                        key={i}
                        id={`tabpanel-${i}`}
                        className={`w-full ${i === activeTab ? 'block' : 'hidden'}`}
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

interface TabProps {
    children: ReactNode;
    currentTab: number;
    activeTab: number;
    setActiveTab: (tab: number) => void;
}

const Tab = ({ children, currentTab, activeTab, setActiveTab }: TabProps): JSX.Element => {
    return (
        <button
            className={`tab ${activeTab === currentTab && 'active'}`}
            onClick={() => setActiveTab(currentTab)}
            role="tab"
            aria-selected={activeTab === currentTab}
            aria-controls={`tabpanel-${currentTab}`}
        >
            {children}
        </button>
    );
}
