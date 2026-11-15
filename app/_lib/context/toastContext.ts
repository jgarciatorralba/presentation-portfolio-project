import { createContext } from "react";
import type { ToastContextValue } from "@lib/types/toast";

export const ToastContext = createContext<ToastContextValue | null>(null);
