import { useTabs } from "./hooks/useTabs";

import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";

import { validateRestaurants } from "./validateRestaurants";

export const Restaurants = () => {
    const { activeTabId, setActiveRestaurant } = useTabs(restaurants);

    const findRestaurant = restaurants.find(restaurant => restaurant.id === activeTabId);

    const validatedRestaurant = validateRestaurants(findRestaurant);

    return (
        <div className='restaurants'>
            <RestaurantTabs restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} />

            {validatedRestaurant ? <RestaurantItem {...validatedRestaurant} /> : <p>Что-то пошло не так</p>}
        </div>
    );
};
