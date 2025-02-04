import { useTabs } from "./hooks/useTabs";

import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";

import { validateRestaurants } from "./validateRestaurants";

import styles from "./restaurants.module.scss";

export const Restaurants = () => {
    const { activeTabId, setActiveRestaurant } = useTabs(restaurants);

    const findRestaurant = restaurants.find(restaurant => restaurant.id === activeTabId);

    const validatedRestaurant = validateRestaurants(findRestaurant);

    return (
        <div className='restaurants'>
            <h1 className={styles.h1}>Рестораны</h1>

            <RestaurantTabs restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} />

            {validatedRestaurant ? <RestaurantItem {...validatedRestaurant} /> : <p>Что-то пошло не так</p>}
        </div>
    );
};
