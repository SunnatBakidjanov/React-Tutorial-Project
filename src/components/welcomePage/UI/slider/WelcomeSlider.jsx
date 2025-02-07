import { WelcomeSlides } from "../slides/WelcomeSlides";

import stylesContainer from "../../scss/welcomeContainer.module.scss";

export const WelcomeSlider = ({ restaurants }) => {
    return (
        <div className={stylesContainer.sliderContainer}>
            <WelcomeSlides restaurants={restaurants} />
        </div>
    );
};
