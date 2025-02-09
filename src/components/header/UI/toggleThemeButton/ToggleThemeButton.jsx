import { use } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../../contexts/theme/themeContext";

import styles from "./stles.module.scss";

export const ToggleThemeButton = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <button
            className={classNames(styles.button, {
                [styles.mainTheme]: theme === "main",
                [styles.secondaryTheme]: theme === "secondary",
            })}
            onClick={toggleTheme}
        >
            Изменить тему
        </button>
    );
};
