import { MouseEvent, ReactNode } from "react";

declare module "userInterface" {
    export interface ButtonProps {
        htmlType: "button" | "submit" | "reset";
        children: ReactNode;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
        className?: string;
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

    export interface TabProps {
        children: ReactNode;
        currentTab: number;
        activeTab: number;
        setActiveTab: (tab: number) => void;
    };

    export interface TabItemProps {
        active?: boolean;
        label: string;
        component: ReactNode;
    };

    export interface ExperienceContentProps {
        companyName: string;
        companyUrl: string;
        position: string;
        startDate: string;
        endDate: string;
        description: string;
        features?: string[];
    };

    export type ProjectCardProps = {
        name: string;
        description: string;
        repository: string;
        homepage: string | null;
        topics: string[];
    };
}
