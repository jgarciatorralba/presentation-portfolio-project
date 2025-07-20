import { useEffect, useRef } from "react";

export default function useTimeout(callback: () => void, delay: number): void {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const functionId = setTimeout(() => savedCallback.current(), delay);

        return () => {
            clearTimeout(functionId);
        };
    }, []);
}
