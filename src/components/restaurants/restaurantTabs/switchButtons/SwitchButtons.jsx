import styles from "./switchButton.module.scss";

const PrevButton = ({ goToPrevSlide, isTransitioning }) => (
    <button className={`${styles.button} ${styles.buttonPrev}`} type='button' onClick={goToPrevSlide} disabled={isTransitioning}>
        {"<"}
    </button>
);

const NextButton = ({ goToNextSlide, isTransitioning }) => (
    <button className={`${styles.button} ${styles.buttonNext}`} type='button' onClick={goToNextSlide} disabled={isTransitioning}>
        {">"}
    </button>
);

export { PrevButton, NextButton };
