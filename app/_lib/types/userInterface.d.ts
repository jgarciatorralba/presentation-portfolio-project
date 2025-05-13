import { MouseEvent, ReactNode } from "react";

declare module "userInterface" {
    interface ButtonProps {
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

    interface Navigation {
        items: NavigationItem[];
    };

    interface NavbarButtonProps {
        open: boolean;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    };

    interface SectionProps {
        children: ReactNode;
        name: string;
        className?: string;
    };

    interface TabItemProps {
        active?: boolean;
        label: string;
        component: ReactNode;
    };

    interface TabsProps {
        items: TabItemProps[];
    }

    interface TabProps {
        children: ReactNode;
        currentTab: number;
        activeTab: number;
        setActiveTab: (tab: number) => void;
    };

    interface TabPanelProps {
        children: ReactNode;
        currentPanel: number;
        activePanel: number;
    }
}
