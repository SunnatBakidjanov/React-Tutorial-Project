import { use } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../../contexts/theme/index";

import styles from "./title.module.scss";

export const Title = ({ text, style }) => {
    const { theme } = use(ThemeContext);

    return (
        <h2
            className={classNames(styles[style], {
                [styles.mainTheme]: theme === "main",
                [styles.secondaryTheme]: theme === "secondary",
            })}
        >
            {text}
        </h2>
    );
};
