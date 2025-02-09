import { use } from "react";
import classNames from "classnames";
import styles from "../../scss/title.module.scss";

import { ThemeContext } from "../../../contexts/theme/index";

export const Title = ({ text, customStyle }) => {
    const { theme } = use(ThemeContext);

    return (
        <h2
            className={classNames(customStyle, {
                [styles.mainTheme]: theme === "main",
                [styles.secondaryTheme]: theme === "secondary",
            })}
        >
            {text}
        </h2>
    );
};
