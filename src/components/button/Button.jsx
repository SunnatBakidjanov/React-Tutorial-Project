import classNames from "classnames";
import { use } from "react";

import { ThemeContext } from "../contexts/theme";

import styles from "./button.module.scss";

export const Button = ({ text, onClick, style = "button" }) => {
    const { theme } = use(ThemeContext);

    return (
        <button
            type='button'
            onClick={onClick}
            className={classNames(styles[style], {
                [styles.mainTheme]: theme === "main",
                [styles.secondaryTheme]: theme === "secondary",
            })}
        >
            {text}
        </button>
    );
};
