import { ToastContext } from "@lib/context/toastContext";
import { useContext } from "react";

export const useToast = () => useContext(ToastContext);
