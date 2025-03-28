import { JSX } from "react";
import { TabProps } from "userInterface";
import styles from '../_styles/components/tab.module.css';


export default function Tab({ children, currentTab, activeTab, setActiveTab }: TabProps): JSX.Element {
    return (
        <button
            className={`tab ${styles.tabButton} ${activeTab === currentTab ? 'active' : ''}`}
            onClick={() => setActiveTab(currentTab)}
            role="tab"
            aria-selected={activeTab === currentTab}
            aria-controls={`tabpanel-${currentTab}`}
        >
            {children}
        </button>
    );
}
