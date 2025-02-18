import { WelcomeSliceImgContainer } from "../slideImg/WelcomeSlideImgContainer.jsx";
import { WelcomeSlideContentContainer } from "../slideContent/WelcomeSlideContentContainer.jsx";

import styles from "./welcomeSlides.module.scss";

import { useWelcomeSlider } from "../../hooks/useWelcomeSlider.js";

export const WelcomeSlides = ({ restaurantsIds }) => {
    const { state } = useWelcomeSlider(restaurantsIds);
    const { opacity, transform, activeId } = state;

    return (
        <div className={styles.container}>
            <div className={styles.slides}>
                <WelcomeSliceImgContainer id={activeId} opacity={opacity} transform={transform} />

                <WelcomeSlideContentContainer id={activeId} opacity={opacity} transform={transform} />
            </div>
        </div>
    );
};
