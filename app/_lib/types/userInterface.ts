import type { ButtonHTMLAttributes, HTMLAttributes, MouseEvent, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface NavigationItem {
    name: string;
    href: string;
}

export interface Navigation {
    items: NavigationItem[];
}

export interface NavbarButtonProps {
    open: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type SectionProps = HTMLAttributes<HTMLElement>;

export interface TabItemProps {
    active?: boolean;
    label: string;
    component: ReactNode;
}

export interface TabsProps {
    items: TabItemProps[];
}

export interface TabProps {
    children: ReactNode;
    currentTab: number;
    activeTab: number;
    setActiveTab: (tab: number) => void;
    totalTabs: number;
}

export interface TabPanelProps {
    children: ReactNode;
    currentPanel: number;
    activePanel: number;
}
