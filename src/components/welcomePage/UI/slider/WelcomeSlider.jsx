import { WelcomeSlides } from "../slides/WelcomeSlides";

import styles from "./welcomeSlider.module.scss";
import stylesContainer from "../../scss/welcomeContainer.module.scss";

import { useWelcomeSlider } from "../../hooks/useWelcomeSlider.js";

export const WelcomeSlider = ({ restaurants }) => {
    const { state } = useWelcomeSlider(restaurants.length);
    const { offset } = state;

    return (
        <div className={stylesContainer.sliderContainer}>
            <ul className={styles.slider} style={{ transform: `translateY(-${offset * 100}%)` }}>
                <WelcomeSlides restaurants={restaurants} />
            </ul>
        </div>
    );
};
