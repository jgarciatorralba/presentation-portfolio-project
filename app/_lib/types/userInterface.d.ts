import { MouseEvent, ReactNode } from "react";

declare module "userInterface" {
    export interface ButtonProps {
        htmlType: "button" | "submit" | "reset";
        children: ReactNode;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
        className?: string;
        role?: string;
        disabled?: boolean;
    };

    interface NavigationItem {
        name: string;
        href: string;
    };

    export interface Navigation {
        items: NavigationItem[];
    };

    export interface NavbarButtonProps {
        open: boolean;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    };

    export interface SectionProps {
        children: ReactNode;
        name: string;
        className?: string;
    };

    export interface TabItemProps {
        active?: boolean;
        label: string;
        component: ReactNode;
    };

    export interface TabsProps {
        items: TabItemProps[];
    }

    export interface TabProps {
        children: ReactNode;
        currentTab: number;
        activeTab: number;
        setActiveTab: (tab: number) => void;
    };

    export interface TabPanelProps {
        children: ReactNode;
        currentPanel: number;
        activePanel: number;
    }
}
