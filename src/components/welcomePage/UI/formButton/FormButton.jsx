import { use } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../../contexts/theme/index";

import styles from "./formButtom.module.scss";

export const FormButton = () => {
    const { theme } = use(ThemeContext);

    return (
        <button type='button' className={styles.button}>
            <span
                className={classNames(styles.text, {
                    [styles.textMainTheme]: theme === "main",
                    [styles.textSecondaryTheme]: theme === "secondary",
                })}
            >
                Показать рестораны
            </span>
            <span
                className={classNames(styles.after, {
                    [styles.afterMainTheme]: theme === "main",
                    [styles.afterSecondaryTheme]: theme === "secondary",
                })}
            ></span>
        </button>
    );
};
