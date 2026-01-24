import { ButtonHTMLAttributes, HTMLAttributes, MouseEvent, ReactNode } from "react";

declare module "userInterface" {
    type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

    interface NavigationItem {
        name: string;
        href: string;
    }

    interface Navigation {
        items: NavigationItem[];
    }

    interface NavbarButtonProps {
        open: boolean;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    }

    type SectionProps = HTMLAttributes<HTMLElement>;

    interface TabItemProps {
        active?: boolean;
        label: string;
        component: ReactNode;
    }

    interface TabsProps {
        items: TabItemProps[];
    }

    interface TabProps {
        children: ReactNode;
        currentTab: number;
        activeTab: number;
        setActiveTab: (tab: number) => void;
    }

    interface TabPanelProps {
        children: ReactNode;
        currentPanel: number;
        activePanel: number;
    }
}
