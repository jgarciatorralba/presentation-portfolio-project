import { ReactNode } from "react";

declare module "toast" {
    export type ToastProps = {
        message: string;
        close: () => void;
    };

    export type ToastProviderProps = {
        children: ReactNode;
    };

    export type ToastType = {
        message: string;
        id: number;
    };

    export type ToastContextValue = {
        open: (message: string) => void;
        close: (id: number) => void;
    };
}
