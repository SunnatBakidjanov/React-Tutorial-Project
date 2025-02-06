import styles from "./welcomeSlides.module.scss";
import titleStyles from "../../scss/title.module.scss";

import { useWelcomeSlider } from "../../hooks/useWelcomeSlider.js";

export const WelcomeSlides = ({ restaurants }) => {
    const { state } = useWelcomeSlider(restaurants.length);
    const { opacity, transform } = state;

    // как тут правильно сделать что бы у меня не ренадэрелись все li а только те которые нужны?
    return restaurants.map(restaurant => (
        <li key={restaurant.id} className={styles.slides}>
            <div className={styles.img} style={{ backgroundImage: `url(/img/png/${restaurant.id}.png)`, opacity: opacity, transform: `translateX(${-transform}px)` }} />

            <div className={styles.content} style={{ opacity: opacity, transform: `translateX(${transform}px)` }}>
                <p className={titleStyles.sliderTitle}>{restaurant.name}</p>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere quas hic consectetur! Quam eveniet voluptates cumque porro blanditiis et, sit ipsa sed dolorum, magnam voluptate ab? Officia, explicabo incidunt?
                </p>
                <span className={styles.line}></span>
                <p className={styles.raiting}></p>
            </div>
        </li>
    ));
};
