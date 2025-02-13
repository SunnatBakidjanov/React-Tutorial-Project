import { useState } from "react";
import { ThemeContext } from "./index.js";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("main");

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === "main" ? "secondary" : "main"));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
