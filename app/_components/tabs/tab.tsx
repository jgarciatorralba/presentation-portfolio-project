import Button from "@components/button";
import styles from "@styles/components/tabs/tabs.module.css";
import { JSX } from "react";
import { TabProps } from "userInterface";

export default function Tab({ children, currentTab, activeTab, setActiveTab }: TabProps): JSX.Element {
    return (
        <Button
            type="button"
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
