import { useContext } from "react";
import { ModeContext } from "../store/ModeContext"

export default function useThemeContext() {
    const context = useContext(ModeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ContextProvider");
    }
    return context;
}