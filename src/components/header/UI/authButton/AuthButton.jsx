import { use } from "react";
import classNames from "classnames";

import { AuthContext } from "../../../contexts/authorization/index";
import { ThemeContext } from "../../../contexts/theme";

import styles from "../../scss/button.module.scss";

export const AuthButton = () => {
    const { toggleAuth, auth } = use(AuthContext);
    const { theme } = use(ThemeContext);

    return (
        <button
            type='button'
            onClick={toggleAuth}
            className={classNames(styles.button, {
                [styles.mainTheme]: theme === "main",
                [styles.secondaryTheme]: theme === "secondary",
            })}
        >
            {!auth.isAuthed ? "Войти" : "Выйти"}
        </button>
    );
};
