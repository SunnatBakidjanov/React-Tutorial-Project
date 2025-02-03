import { validateRestaurantItem } from "./validateResturantItem";
import { getButtonClass } from "./getButtonClass";

import styles from "./tabsButtons.module.scss";

export const TabsButtons = ({ restaurants, handleSetIdOnClick, inactivelElement, activeElement, centralElement, clickOnPrevSlide, clickOnNextSlide }) => {
    const modernRestaurants = [restaurants[restaurants.length - 1], ...restaurants, restaurants[0]];

    const validatedRestaurants = validateRestaurantItem(modernRestaurants);

    return validatedRestaurants.map((restaurant, index) => {
        const transformStyles = index === centralElement ? activeElement.transform : inactivelElement.transform;
        const opacityStyles = index === centralElement ? activeElement.opacity : inactivelElement.opacity;

        return (
            <button
                key={restaurant.id}
                className={getButtonClass(index, modernRestaurants.length, styles)}
                onClick={() => {
                    handleSetIdOnClick(restaurant.id);
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
