import { use } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../../contexts/theme/themeContext";

import style from "./formButtom.module.scss";

export const FormButton = () => {
    const { theme } = use(ThemeContext);

    return (
        <button
            type='button'
            className={classNames(style.button, {
                [style.buttonMainTheme]: theme === "main",
                [style.buttonSecondaryTheme]: theme === "secondary",
            })}
        >
            Показать рестораны{" "}
            <span
                className={classNames(style.after, {
                    [style.afterMainTheme]: theme === "main",
                    [style.afterSecondaryTheme]: theme === "secondary",
                })}
            ></span>
        </button>
    );
};
