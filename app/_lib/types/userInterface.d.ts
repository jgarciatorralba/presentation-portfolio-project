import { ButtonHTMLAttributes, HTMLAttributes, MouseEvent, ReactNode } from "react";

declare module "userInterface" {
    interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> {
        htmlType: "button" | "submit" | "reset";
        children: ReactNode;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    }

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

    interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "id"> {
        children: ReactNode;
        name: string;
    }

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
