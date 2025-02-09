import classNames from "classnames";
import { use } from "react";

import { ThemeContext } from "../contexts/theme/index";
import { Logo } from "./UI/logo/Logo";
import { ToggleThemeButton } from "./UI/toggleThemeButton/ToggleThemeButton";
import { UserName } from "./UI/user/UserName";

import styles from "./header.module.scss";
import { AuthButton } from "./UI/authButton/authButton";

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

                <div className={styles.authContainer}>
                    <ToggleThemeButton />
                    <UserName />
                    <AuthButton />
                </div>
            </div>
        </header>
    );
};
