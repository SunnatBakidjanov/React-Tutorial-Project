import { useEffect, useState } from "react";

import { validateRestaurantItem } from "./scripts/validateResturantItem";
import { getButtonClass } from "./scripts/getButtonClass";

import styles from "./tabsButtons.module.scss";

export const TabsButtons = ({ restaurants, setActiveRestaurant, inactivelElement, activeElement, centralElement, clickOnPrevSlide, clickOnNextSlide, buttonWidth }) => {
    const modernRestaurants = [restaurants[restaurants.length - 1], ...restaurants, restaurants[0]];
    const validatedRestaurants = validateRestaurantItem(modernRestaurants);

    const [currentCentralElement, setCurrentCentralElement] = useState(centralElement);

    useEffect(() => {
        if (currentCentralElement !== centralElement) {
            setCurrentCentralElement(centralElement);
            setActiveRestaurant(validatedRestaurants[centralElement].id);
        }
    }, [currentCentralElement, centralElement, validatedRestaurants, setActiveRestaurant]);

    return validatedRestaurants.map((restaurant, index) => {
        const transformStyles = index === centralElement ? activeElement.transform : inactivelElement.transform;
        const opacityStyles = index === centralElement ? activeElement.opacity : inactivelElement.opacity;

        return (
            <button
                key={restaurant.id}
                ref={buttonWidth}
                className={getButtonClass(index, modernRestaurants.length, styles)}
                onClick={() => {
                    index === centralElement + 1 ? clickOnPrevSlide() : false;
                    index === centralElement - 1 ? clickOnNextSlide() : false;
                }}
                style={{ transform: transformStyles, opacity: opacityStyles }}
            >
                {restaurant.name}
            </button>
        );
    });
};
