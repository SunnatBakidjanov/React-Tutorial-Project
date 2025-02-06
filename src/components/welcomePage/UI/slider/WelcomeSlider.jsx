import styles from "./welcomeSlider.module.scss";
import stylesContainer from "../../scss/welcomeContainer.module.scss";

export const WelcomeSlider = () => {
    return (
        <div className={stylesContainer.sliderContainer}>
            <div className={styles.slider}>
                <div className={styles.slides}></div>
            </div>
        </div>
    );
};
