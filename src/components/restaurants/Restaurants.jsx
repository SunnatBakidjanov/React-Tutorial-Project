import { useTabs } from "./useTabs";
import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";
import { validateRestaurant } from "./validateRestaurant";

export const Restaurants = () => {
    const { activeTabId, handleSetIdOnClick } = useTabs(restaurants);

    const findRestaurant = restaurants.find(restaurant => restaurant.id === activeTabId);

    return (
        <div className='restaurants'>
            <h1 className='main-title'>Рестораны</h1>

            <RestaurantTabs restaurants={restaurants} handleSetIdOnClick={handleSetIdOnClick} />

            <ul className='restaurants-list'>
                {findRestaurant ? (
                    <li key={findRestaurant.id}>
                        <RestaurantItem {...validateRestaurant(findRestaurant)} />
                    </li>
                ) : (
                    <p>Нет подходящего ресторана для отображения</p>
                )}
            </ul>
        </div>
    );
};
