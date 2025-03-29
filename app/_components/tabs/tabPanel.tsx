import { JSX } from "react";
import { TabPanelProps } from "userInterface";
import styles from '../../_styles/components/tabs/tabs.module.css';

export default function TabPanel({ currentPanel, activePanel, children }: TabPanelProps): JSX.Element {
    return (
        <>
            <div
                className={`absolute ${styles.tabContent} ${currentPanel === activePanel && styles.active}`}
                role="tabpanel"
                aria-labelledby={`tab-${currentPanel}`}
            >
                {children}
            </div>
        </>
    );
};
