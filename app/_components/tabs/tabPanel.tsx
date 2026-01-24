import styles from "@styles/components/tabs/tabs.module.css";
import { JSX } from "react";
import { TabPanelProps } from "userInterface";

export default function TabPanel({ currentPanel, activePanel, children }: TabPanelProps): JSX.Element {
    return (
        <div
            className={`absolute ${styles.tabContent} ${currentPanel === activePanel && styles.active}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentPanel}`}
        >
            {children}
        </div>
    );
}
