'use client';

import { JSX, useMemo, useState } from "react";
import { ToastProviderProps, ToastType } from "toast";
import { ToastContext } from '../../_lib/context/toastContext';
import styles from '../../_styles/components/toast/toast.module.css';
import Toast from './toast';

export default function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    function openToast(message: string): void {
        const newToast = {
            id: Date.now(),
            message: message,
        };

        setToasts((prevToasts) => [...prevToasts, newToast]);
    }

    function closeToast(id: number): void {
        setToasts((previousToasts) => previousToasts.filter((toast) => toast.id !== id));
    }

    const contextValue = useMemo(() => ({
        open: openToast,
        close: closeToast,
    }), []);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <div className={styles.toastContainer}>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        close={() => closeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
}
