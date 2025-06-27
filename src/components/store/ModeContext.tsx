import { createContext, ReactNode, useEffect, useState } from "react";

interface Mode {
    mode: "light" | "dark";
    handleMode: () => void;
}

export const ModeContext = createContext<Mode | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

export const ModeContextProvider = ({ children }: ContextProviderProps) => {

    const [mode, setMode] = useState<"light" | "dark">(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark' || savedMode === 'light') return savedMode;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    useEffect(() => {
        if(mode === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [mode])

    function handleMode(): void {
        setMode((prevMode) => prevMode === 'dark' ? 'light' : 'dark')
    }

    return (
        <ModeContext value={{mode, handleMode }} >
            { children }
        </ModeContext>
    )
}