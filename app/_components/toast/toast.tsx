'use client'

import Image from 'next/image';
import { JSX, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../../_styles/components/toast/toast.module.css';
import { ToastContext } from './toast-context';

type ToastProperties = {
    message: string;
    close: () => void;
};

function useTimeout(callback: () => void) {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const functionId = setTimeout(() => savedCallback.current(), 3000);

        return () => {
            clearTimeout(functionId);
        };
    }, []);
}

export default function Toast({ message, close }: ToastProperties): JSX.Element {
    useTimeout(() => {
        close();
    });

    return (
        <div className={`${styles.toast} p-4`}>
            <div className='flex flex-row items-center'>
                <Image
                    src="/warning.svg"
                    alt="Warning Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                    quality={100}
                />
                <p className="mr-8">{message}</p>
            </div>

            <button className={styles.closeButton} onClick={close}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

type ToastProviderProps = {
    children: React.ReactNode;
};

type ToastType = {
    message: string;
    id: number;
};

export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    function openToast(message: string) {
        const newToast = {
            id: Date.now(),
            message: message,
        };

        setToasts((prevToasts) => [...prevToasts, newToast]);
    }

    function closeToast(id: number) {
        setToasts((previousToasts) => previousToasts.filter((toast) => toast.id !== id));
    }

    const contextValue = useMemo(() => ({
        open: openToast,
        close: closeToast,
    }), []);

    return (
        <>
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
        </>
    );
}
