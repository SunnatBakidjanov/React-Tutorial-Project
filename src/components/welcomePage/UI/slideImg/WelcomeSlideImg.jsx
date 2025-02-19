import styles from "./img.module.scss";

export const WelcomeSlideImg = ({ id, opacity, transform }) => {
    return <div className={styles.img} style={{ backgroundImage: `url(/img/png/${id}.png)`, opacity: opacity, transform: `translateX(${-transform}px)` }} />;
};
