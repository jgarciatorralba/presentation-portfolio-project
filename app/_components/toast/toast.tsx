'use client'

import useTimeout from '@/app/_lib/hooks/useTimeout';
import Image from 'next/image';
import { JSX } from 'react';
import { ToastProps } from 'toast';
import styles from '../../_styles/components/toast/toast.module.css';

export default function Toast({ message, close }: ToastProps): JSX.Element {
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
