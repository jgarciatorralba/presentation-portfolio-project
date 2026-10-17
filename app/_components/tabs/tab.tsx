import Button from "@components/button";
import styles from "@styles/components/tabs/tabs.module.css";
import { JSX, KeyboardEvent } from "react";
import { TabProps } from "userInterface";

export default function Tab({ children, currentTab, activeTab, setActiveTab, totalTabs }: TabProps): JSX.Element {
    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            setActiveTab((currentTab - 1 + totalTabs) % totalTabs);
            return;
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            setActiveTab((currentTab + 1) % totalTabs);
            return;
        }

        if (event.key === 'Home') {
            event.preventDefault();
            setActiveTab(0);
            return;
        }

        if (event.key === 'End') {
            event.preventDefault();
            setActiveTab(totalTabs - 1);
        }
    }

    return (
        <Button
            type="button"
            id={`tab-${currentTab}`}
            role="tab"
            tabIndex={activeTab === currentTab ? 0 : -1}
            className={`tab ${styles.tabButton} ${activeTab === currentTab ? 'active' : ''}`}
            onClick={() => setActiveTab(currentTab)}
            onKeyDown={handleKeyDown}
            aria-selected={activeTab === currentTab}
            aria-controls={`tabpanel-${currentTab}`}
        >
            {children}
        </Button>
    );
}
