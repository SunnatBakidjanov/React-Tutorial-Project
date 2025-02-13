import styles from "./img.module.scss";

export const WelcomeSlideImg = ({ restaurant, opacity, transform }) => {
    return <div className={styles.img} style={{ backgroundImage: `url(/img/png/${restaurant.id}.png)`, opacity: opacity, transform: `translateX(${-transform}px)` }} />;
};
