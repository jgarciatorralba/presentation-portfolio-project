import styles from "@styles/components/tabs/tabs.module.css";
import { JSX } from "react";
import type { TabPanelProps } from "@lib/types/userInterface";

export default function TabPanel({ currentPanel, activePanel, children }: TabPanelProps): JSX.Element {
    const isActive = currentPanel === activePanel;

    return (
        <div
            id={`tabpanel-${currentPanel}`}
            className={`absolute ${styles.tabContent} ${isActive ? styles.active : ''}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentPanel}`}
            tabIndex={0}
        >
            {children}
        </div>
    );
}
