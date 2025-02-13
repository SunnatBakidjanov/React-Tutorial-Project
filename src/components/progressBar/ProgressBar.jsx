import { use } from "react";
import classNames from "classnames";

import { useProgressBar } from "./useProgressBar";
import { ThemeContext } from "../contexts/theme/index";

import style from "./progressBar.module.scss";

export const ProgressBar = () => {
    const { theme } = use(ThemeContext);
    const { progress } = useProgressBar();

    return (
        <div
            className={classNames(style.container, {
                [style.mainTheme]: theme === "main",
                [style.secondaryTheme]: theme === "secondary",
            })}
        >
            <div className={style.progress} style={{ width: `${progress}%` }}></div>
        </div>
    );
};
