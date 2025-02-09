import { use } from "react";

import { ThemeContext } from "../../../contexts/theme/themeContext";

import style from "./formButtom.module.scss";

export const FormButton = () => {
    const { themeVariables } = use(ThemeContext);

    return (
        <button
            type='button'
            className={style.button}
            style={{ color: themeVariables["--welcome-button-show-restaurants-text-color"] }}
            onMouseEnter={event => {
                event.target.style.color = themeVariables["--welcome-button-show-resturants-text-hover-color"];
            }}
            onMouseLeave={event => {
                event.target.style.color = themeVariables["--welcome-button-show-restaurants-text-color"];
            }}
        >
            Показать рестораны <span className={style.after} style={{ backgroundColor: themeVariables["--welcome-button-show-restaurants-bg-color"], transition: `background-color ${themeVariables.transition}, width 0.4s ease-out` }}></span>
        </button>
    );
};
