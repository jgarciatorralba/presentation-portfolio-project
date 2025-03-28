import { JSX } from "react";
import { TabPanelProps } from "userInterface";
import styles from '../_styles/components/tabPanel.module.css';

export default function TabPanel({ currentPanel, activePanel, children }: TabPanelProps): JSX.Element {
    return (
        <>
            <div
                id={`tabpanel-${currentPanel}`}
                className={`absolute ${styles.tabContent} ${currentPanel === activePanel && styles.active}`}
                role="tabpanel"
                aria-labelledby={`tab-${currentPanel}`}
            >
                {children}
            </div>
        </>
    );
};
