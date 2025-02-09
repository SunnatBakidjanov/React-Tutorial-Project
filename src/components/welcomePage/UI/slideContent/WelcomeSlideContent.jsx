import { use } from "react";

import { ThemeContext } from "../../../contexts/theme/themeContext";

import styles from "./slideContent.module.scss";
import titleStyles from "../../scss/title.module.scss";

export const WelcomeSlideContent = ({ restaurant, opacity, transform }) => {
    const { themeVariables } = use(ThemeContext);

    return (
        <div className={styles.content} style={{ opacity: opacity, transform: `translateX(${transform}px)`, transition: "opacity 1s ease-out, transform 1s ease-out" }}>
            <p className={titleStyles.sliderTitle} style={{ borderBottomColor: themeVariables["--welcome-slide-title-border-bottom-color"], transition: `border-bottom-color ${themeVariables.transition}` }}>
                {restaurant.name}
            </p>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere quas hic consectetur! Quam eveniet voluptates cumque porro blanditiis et, sit ipsa sed dolorum, magnam voluptate ab? Officia, explicabo incidunt?
            </p>
            <span className={styles.line} style={{ backgroundColor: themeVariables["--welcome-slide-line-bg-color"], transition: `background-color ${themeVariables.transition}` }}></span>
            <p className={styles.raiting}></p>
        </div>
    );
};
