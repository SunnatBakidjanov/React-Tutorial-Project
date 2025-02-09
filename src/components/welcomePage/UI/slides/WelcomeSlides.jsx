import { WelcomeSlideImg } from "../slideImg/WelcomeSlideImg.jsx";

import styles from "./welcomeSlides.module.scss";
import stylesContainer from "../../scss/welcomeContainer.module.scss";

import { useWelcomeSlider } from "../../hooks/useWelcomeSlider.js";
import { WelcomeSlideContent } from "../slideContent/WelcomeSlideContent.jsx";

export const WelcomeSlides = ({ restaurants }) => {
    const { state } = useWelcomeSlider(restaurants);
    const { opacity, transform, activeId } = state;

    const restaurant = restaurants.find(restaurant => restaurant.id === activeId);

    if (!restaurant) return null;

    return (
        <div className={stylesContainer.sliderContainer}>
            <div key={restaurant.id} className={styles.slides}>
                <WelcomeSlideImg restaurant={restaurant} opacity={opacity} transform={transform} />

                <WelcomeSlideContent restaurant={restaurant} opacity={opacity} transform={transform} />
            </div>
        </div>
    );
};
