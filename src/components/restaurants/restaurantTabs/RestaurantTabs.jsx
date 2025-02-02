import { TabsButtons } from "../tabsButtons/TabsButtons";
import styles from "./restaurantTabs.module.scss";
import { useSlider } from "./useSlider";

export const RestaurantTabs = ({ restaurants, handleSetIdOnClick }) => {
    const { offset, disable, transitionDelay, restaurants: updateRestaurants, prevSlide, nextSlide, transitionEnd } = useSlider(restaurants);

    const sliderStyle = {
        transition: `transform ${transitionDelay}s ease-in-out`,
        transform: `translateX(${offset}px)`,
    };

    return (
        <div className={styles.box}>
            <button className={`${styles.button} ${styles.buttonPrev}`} type='button' onClick={prevSlide} disabled={disable}>
                {"<"}
            </button>

            <div className={styles.slider} style={sliderStyle} onTransitionEnd={transitionEnd}>
                <TabsButtons restaurants={updateRestaurants} handleSetIdOnClick={handleSetIdOnClick} />
            </div>

            <button className={`${styles.button} ${styles.buttonNext}`} type='button' onClick={nextSlide} disabled={disable}>
                {">"}
            </button>
        </div>
    );
};
