import { JSX } from "react";
import { TabProps } from "userInterface";
import styles from '../_styles/components/tab.module.css';
import Button from "./button";


export default function Tab({ children, currentTab, activeTab, setActiveTab }: TabProps): JSX.Element {
    return (
        <Button
            htmlType="button"
            role="tab"
            className={`tab ${styles.tabButton} ${activeTab === currentTab ? 'active' : ''}`}
            onClick={() => setActiveTab(currentTab)}
            aria-selected={activeTab === currentTab}
            aria-controls={`tabpanel-${currentTab}`}
        >
            {children}
        </Button>
    );
}
