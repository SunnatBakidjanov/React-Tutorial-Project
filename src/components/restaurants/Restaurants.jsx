import { useTabs } from "./hooks/useTabs";
import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";
import { validateRestaurant } from "./validateRestaurant";
import { ReviewForm } from "./review-form/ReviewForm";

export const Restaurants = () => {
    const { activeTabId, handleSetIdOnClick } = useTabs(restaurants);

    const findRestaurant = restaurants.find(restaurant => restaurant.id === activeTabId);

    const validatedRestaurant = validateRestaurant(findRestaurant);

    return (
        <div className='restaurants'>
            <h1 className='main-title'>Рестораны</h1>

            <RestaurantTabs restaurants={validatedRestaurant} handleSetIdOnClick={handleSetIdOnClick} />

            <ul className='restaurants-list'>
                <li key={findRestaurant.id}>
                    {/* так можно делать? */}
                    <RestaurantItem {...validatedRestaurant} />

                    <ReviewForm />
                </li>
            </ul>
        </div>
    );
};
