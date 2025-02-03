import { TabsButtons } from "../tabsButtons/TabsButtons";
import styles from "./restaurantTabs.module.scss";
import { useSlider } from "./useSlider";

export const RestaurantTabs = ({ restaurants, handleSetIdOnClick }) => {
    const { offset, disable, transitionDelay, restaurants: updateRestaurants, prevSlide, nextSlide, inactivelElement, activeElement, centralElement } = useSlider(restaurants);

    const sliderStyle = {
        transition: `transform ${transitionDelay}ms ease-in-out`,
        transform: `translateX(${offset}px)`,
    };

    return (
        <div className={styles.container}>
            <button className={`${styles.button} ${styles.buttonPrev}`} type='button' onClick={prevSlide} disabled={disable}>
                {"<"}
            </button>

            <div className={styles.box}>
                <div className={styles.slider} style={sliderStyle}>
                    <TabsButtons restaurants={updateRestaurants} handleSetIdOnClick={handleSetIdOnClick} inactivelElement={inactivelElement} activeElement={activeElement} centralElement={centralElement} clickOnPrevSlide={prevSlide} clickOnNextSlide={nextSlide} />
                </div>
            </div>

            <button className={`${styles.button} ${styles.buttonNext}`} type='button' onClick={nextSlide} disabled={disable}>
                {">"}
            </button>
        </div>
    );
};
