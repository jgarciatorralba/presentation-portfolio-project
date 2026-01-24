import { ToastContext } from "@lib/context/toastContext";
import { useContext } from "react";
import { ToastContextValue } from "toast";

export const useToast = (): ToastContextValue | null => useContext(ToastContext);
