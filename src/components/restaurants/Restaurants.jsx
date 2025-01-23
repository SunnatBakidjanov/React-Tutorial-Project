import { useTabs } from "./useTabs";
import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";
import { validateRestaurant } from "./validateRestaurant";

export const Restaurants = () => {
    const { activeTab, handleTabClick } = useTabs(restaurants);

    const filteredRestaurants = restaurants.filter(restaurant => restaurant.id === activeTab);

    return (
        <div className='restaurants'>
            <h1 className='main-title' style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid gray", height: "50px" }}>
                Рестораны
            </h1>

            <RestaurantTabs restaurants={restaurants} handleTabClick={handleTabClick} />

            <ul className='restaurants-list'>
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map(restaurant => {
                        const validatedRestaurant = validateRestaurant(restaurant);

                        return (
                            <li className='restaurants-item' key={validatedRestaurant.id}>
                                <RestaurantItem name={validatedRestaurant.name} menu={validatedRestaurant.menu} reviews={validatedRestaurant.reviews} />
                            </li>
                        );
                    })
                ) : (
                    <li className='restaurants-item'>
                        <p>Тут должен быть какой-то ресторан, но его нет. Попробуйте выбрать другой.</p>
                    </li>
                )}
            </ul>
        </div>
    );
};
