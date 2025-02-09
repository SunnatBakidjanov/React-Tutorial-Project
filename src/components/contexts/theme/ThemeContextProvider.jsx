import { useState } from "react";
import { ThemeContext } from "./themeContext.js";
import { themes } from "./themes.js";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("main");

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === "main" ? "secondary" : "main"));
    };

    const themeWithTransition = {
        ...themes[theme],
        transition: "0.3s ease-out",
    };

    return <ThemeContext.Provider value={{ themeVariables: themeWithTransition, toggleTheme }}>{children}</ThemeContext.Provider>;
};
