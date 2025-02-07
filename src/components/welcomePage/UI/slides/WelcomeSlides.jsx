import styles from "./welcomeSlides.module.scss";
import titleStyles from "../../scss/title.module.scss";

import { useWelcomeSlider } from "../../hooks/useWelcomeSlider.js";

export const WelcomeSlides = ({ restaurants }) => {
    const { state } = useWelcomeSlider(restaurants);
    const { opacity, transform, activeId } = state;

    const restaurant = restaurants.find(restaurant => restaurant.id === activeId);

    if (!restaurant) return null;

    return (
        <div key={restaurant.id} className={styles.slides}>
            <div className={styles.img} style={{ backgroundImage: `url(/img/png/${restaurant.id}.png)`, opacity: opacity, transform: `translateX(${-transform}px)`, transition: "opacity 1s ease-out, transform 1s ease-out" }} />

            <div className={styles.content} style={{ opacity: opacity, transform: `translateX(${transform}px)`, transition: "opacity 1s ease-out, transform 1s ease-out" }}>
                <p className={titleStyles.sliderTitle}>{restaurant.name}</p>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere quas hic consectetur! Quam eveniet voluptates cumque porro blanditiis et, sit ipsa sed dolorum, magnam voluptate ab? Officia, explicabo incidunt?
                </p>
                <span className={styles.line}></span>
                <p className={styles.raiting}></p>
            </div>
        </div>
    );
};
