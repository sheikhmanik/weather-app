import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark' || savedMode === 'light') return savedMode;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    useEffect(() => {
        if(darkMode === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    function handleMode() {
        setDarkMode((prevMode) => prevMode === 'dark' ? 'light' : 'dark')
    }

    return (
        <ModeContext value={{ handleMode }} >
            { children }
        </ModeContext>
    )
}