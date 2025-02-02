import { useTabs } from "./hooks/useTabs";

import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";
import { validateRestaurants } from "./validateRestaurants";
import { validateId } from "./validateID";

import styles from "./restaurants.module.scss";

export const Restaurants = () => {
    const { activeTabId, handleSetIdOnClick } = useTabs(restaurants);

    const modernRestaurants = [restaurants[restaurants.length - 1], ...restaurants, restaurants[0]];

    const validatedId = validateId(modernRestaurants);

    const findRestaurant = validatedId.find(restaurant => restaurant.id === activeTabId);

    const validatedRestaurant = validateRestaurants(findRestaurant);

    return (
        <div className='restaurants'>
            <h1 className={styles.h1}>Рестораны</h1>

            <RestaurantTabs restaurants={restaurants} handleSetIdOnClick={handleSetIdOnClick} />

            {validatedRestaurant ? <RestaurantItem {...validatedRestaurant} /> : <p>Что-то пошло не так</p>}
        </div>
    );
};
