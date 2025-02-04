import { TabsButtons } from "../tabsButtons/TabsButtons";
import { PrevButton, NextButton } from "./switchButtons/SwitchButtons";

import { useSlider } from "./useSlider";

import styles from "./restaurantTabs.module.scss";

export const RestaurantTabs = ({ restaurants, setActiveRestaurant }) => {
    const { offset, isTransitioning, transitionDuration, restaurants: updatedRestaurants, goToPrevSlide, goToNextSlide, inactiveStyle, activeStyle, centralIndex, buttonRef } = useSlider(restaurants);

    const sliderStyle = {
        transition: `transform ${transitionDuration}ms ease-out`,
        transform: `translateX(${offset}px)`,
    };

    return (
        <div className={styles.container}>
            <PrevButton goToPrevSlide={goToPrevSlide} isTransitioning={isTransitioning} />

            <div className={styles.box}>
                <div className={styles.slider} style={sliderStyle}>
                    <TabsButtons
                        restaurants={updatedRestaurants}
                        setActiveRestaurant={setActiveRestaurant}
                        inactivelElement={inactiveStyle}
                        activeElement={activeStyle}
                        centralElement={centralIndex}
                        clickOnPrevSlide={goToPrevSlide}
                        clickOnNextSlide={goToNextSlide}
                        buttonWidth={buttonRef}
                    />
                </div>
            </div>

            <NextButton goToNextSlide={goToNextSlide} isTransitioning={isTransitioning} />
        </div>
    );
};
