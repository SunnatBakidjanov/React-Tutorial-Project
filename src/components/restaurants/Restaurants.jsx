import { useTabs } from "./hooks/useTabs";
import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";
import { validateRestaurant } from "./validateRestaurant";
import styles from "./restaurants.module.scss";

export const Restaurants = () => {
    const { activeTabId, handleSetIdOnClick } = useTabs(restaurants);

    const findRestaurant = restaurants.find(restaurant => restaurant.id === activeTabId);

    const validatedRestaurant = validateRestaurant(findRestaurant);

    return (
        <div className='restaurants'>
            <h1 className={styles.h1}>Рестораны</h1>

            <RestaurantTabs restaurants={restaurants} handleSetIdOnClick={handleSetIdOnClick} />

            {validatedRestaurant ? <RestaurantItem {...validatedRestaurant} /> : <p>Что-то пошло не так</p>}
        </div>
    );
};
