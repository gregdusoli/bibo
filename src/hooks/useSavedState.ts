import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Result<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

function useSavedState<T>(key: string, initialState: T): Result<T> {
    const [state, setState] = useState(() => {
        const savedState = localStorage.getItem(key);

        return savedState ? JSON.parse(savedState) : initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default useSavedState;