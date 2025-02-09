import { use } from "react";

import { useProgressBar } from "./useProgressBar";
import { ThemeContext } from "../contexts/theme/themeContext";
import style from "./progressBar.module.scss";

export const ProgressBar = () => {
    const { themeVariables } = use(ThemeContext);
    const { progress } = useProgressBar();

    return (
        <div className={style.container} style={{ backgroundColor: themeVariables["--progressbar-bg-color"], transition: `background-color ${themeVariables.transition}` }}>
            <div className={style.progress} style={{ width: `${progress}%` }}></div>
        </div>
    );
};
