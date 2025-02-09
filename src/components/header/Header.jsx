import classNames from "classnames";
import { use } from "react";

import { ThemeContext } from "../contexts/theme/themeContext";
import { Logo } from "./UI/logo/Logo";
import { ToggleThemeButton } from "./UI/toggleThemeButton/ToggleThemeButton";

import styles from "./header.module.scss";

export const Header = () => {
    const { theme } = use(ThemeContext);

    return (
        <header className={styles.header}>
            <div
                className={classNames(styles.wrapper, {
                    [styles.mainTheme]: theme === "main",
                    [styles.secondaryTheme]: theme === "secondary",
                })}
            >
                <Logo />
                <ToggleThemeButton />
            </div>
        </header>
    );
};
