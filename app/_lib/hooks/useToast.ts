import { ToastContext } from "@lib/context/toastContext";
import { useContext } from "react";
import type { ToastContextValue } from "@lib/types/toast";

export const useToast = (): ToastContextValue | null => useContext(ToastContext);
