import { createContext } from "react";
import { ToastContextValue } from "toast";

export const ToastContext = createContext<ToastContextValue | null>(null);
