import classNames from "classnames";
import { use } from "react";

import { ThemeContext } from "../contexts/theme/index";
import { AuthContext } from "../contexts/authorization";

import { Logo } from "./UI/logo/Logo";
import { UserName } from "./UI/user/UserName";
import { Button } from "../button/Button";

import styles from "./header.module.scss";

export const Header = () => {
    const { theme, toggleTheme } = use(ThemeContext);
    const { auth, toggleAuth } = use(AuthContext);

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
                    <Button onClick={toggleTheme} text={"Изменить тему"} />
                    <UserName />
                    <Button onClick={toggleAuth} text={!auth.isAuthed ? "Войти" : "Выйти"} />
                </div>
            </div>
        </header>
    );
};
