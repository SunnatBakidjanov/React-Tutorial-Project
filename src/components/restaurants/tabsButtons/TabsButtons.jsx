import { validateRestaurantItem } from "./validateResturantItem";

import styles from "./tabsButtons.module.scss";

export const TabsButtons = ({ restaurants, handleSetIdOnClick }) => {
    const modernRestaurants = [restaurants[restaurants.length - 1], ...restaurants, restaurants[0]];

    const validatedRestaurants = validateRestaurantItem(modernRestaurants);

    return validatedRestaurants.map((restaurant, index) => (
        <button key={restaurant.id} className={`${styles.button} ${modernRestaurants.length % 2 === 0 ? (modernRestaurants.length - 1 === index ? styles.last : "") : ""}`} onClick={() => handleSetIdOnClick(restaurant.id)}>
            {restaurant.name}
        </button>
    ));
};
