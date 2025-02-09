import { use } from "react";
import { ThemeContext } from "../../../contexts/theme/themeContext";

import styles from "./stles.module.scss";

export const ToggleThemeButton = () => {
    const { toggleTheme, themeVariables } = use(ThemeContext);

    return (
        <button
            className={styles.button}
            onClick={toggleTheme}
            style={{ backgroundColor: themeVariables["--header-button-bg-color"], color: themeVariables["--header-button-text-color"], transition: `background-color ${themeVariables.transition}, color ${themeVariables.transition}` }}
            onMouseEnter={event => {
                event.target.style.backgroundColor = themeVariables["--header-button-hover-bg-color"];
                event.target.style.color = themeVariables["--header-button-text-hover-color"];
            }}
            onMouseLeave={event => {
                event.target.style.backgroundColor = themeVariables["--header-button-bg-color"];
                event.target.style.color = themeVariables["--header-button-text-color"];
            }}
        >
            Изменить тему
        </button>
    );
};
