import { ReactNode } from "react";

declare module "toast" {
    interface ToastProps {
        message: string;
        close: () => void;
    }

    interface ToastProviderProps {
        children: ReactNode;
    }

    interface ToastType {
        message: string;
        id: number;
    }

    interface ToastContextValue {
        open: (message: string) => void;
        close: (id: number) => void;
    }
}
