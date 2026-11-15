import type { ReactNode } from "react";

export interface ToastProps {
    message: string;
    close: () => void;
}

export interface ToastProviderProps {
    children: ReactNode;
}

export interface ToastType {
    message: string;
    id: number;
}

export interface ToastContextValue {
    open: (message: string) => void;
    close: (id: number) => void;
}
