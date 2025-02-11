import { use } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../../contexts/theme/index";

import styles from "./slideContent.module.scss";
import { Title } from "../title/Title";

export const WelcomeSlideContent = ({ restaurant, opacity, transform }) => {
    const { theme } = use(ThemeContext);

    return (
        <div className={styles.content} style={{ opacity: opacity, transform: `translateX(${transform}px)`, transition: "opacity 1s ease-out, transform 1s ease-out" }}>
            <Title text={restaurant.name} style='slider' />
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere quas hic consectetur! Quam eveniet voluptates cumque porro blanditiis et, sit ipsa sed dolorum, magnam voluptate ab? Officia, explicabo incidunt?
            </p>
            <span
                className={classNames(styles.line, {
                    [styles.lineMainTheme]: theme === "main",
                    [styles.lineSecondaryTheme]: theme === "secondary",
                })}
            ></span>
            <p className={styles.raiting}></p>
        </div>
    );
};
