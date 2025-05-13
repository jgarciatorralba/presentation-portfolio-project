import { ReactNode } from "react";

declare module "toast" {
    type ToastProps = {
        message: string;
        close: () => void;
    };

    type ToastProviderProps = {
        children: ReactNode;
    };

    type ToastType = {
        message: string;
        id: number;
    };

    type ToastContextValue = {
        open: (message: string) => void;
        close: (id: number) => void;
    };
}
