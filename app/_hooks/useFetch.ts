'use client'

import { useEffect, useReducer } from "react";

interface FetchState<T> {
    data?: T;
    error?: Error;
}

type Action<T> =
    | { type: "loading" }
    | { type: "fetched"; payload: T }
    | { type: "error"; payload: Error };

export default function useFetch<T = unknown>(
    url: string,
    options?: RequestInit
): FetchState<T> {
    const initialState: FetchState<T> = {
        error: undefined,
        data: undefined,
    };

    const fetchReducer = (
        state: FetchState<T>,
        action: Action<T>
    ): FetchState<T> => {
        switch (action.type) {
            case "loading":
                return { ...initialState };
            case "fetched":
                return { ...initialState, data: action.payload };
            case "error":
                return { ...initialState, error: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            dispatch({ type: "loading" });

            try {
                const response = await fetch(url, {
                    ...options,
                    signal: abortController.signal,
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = (await response.json()) as T;
                if (abortController.signal.aborted) return;

                dispatch({ type: "fetched", payload: data });
            } catch (error) {
                if (abortController.signal.aborted) return;

                dispatch({ type: "error", payload: error as Error });
            }
        };

        void fetchData();

        return () => {
            abortController.abort();
        };
    }, [url]);

    return state;
}
