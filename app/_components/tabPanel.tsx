import { JSX, ReactNode } from "react";
import styles from '../_styles/components/tabPanel.module.css';

export default function TabPanel({ currentPanel, activePanel, children }: { currentPanel: number, activePanel: number, children: ReactNode }): JSX.Element {
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
