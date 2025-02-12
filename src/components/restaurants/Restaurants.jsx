import { useTabs } from "./hooks/useTabs";

import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";

import { validateRestaurants } from "./validateRestaurants";

import styles from "./restauratns.module.scss";

export const Restaurants = () => {
    const updateRestaurants = [...restaurants];

    const { activeTabId, setActiveRestaurant } = useTabs(updateRestaurants);

    const findRestaurant = updateRestaurants.find(restaurant => restaurant.id === activeTabId);

    const validatedRestaurant = validateRestaurants(findRestaurant);

    return (
        <div className={styles.container}>
            <RestaurantTabs restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} />

            {validatedRestaurant ? <RestaurantItem {...validatedRestaurant} /> : <p>Что-то пошло не так</p>}
        </div>
    );
};
