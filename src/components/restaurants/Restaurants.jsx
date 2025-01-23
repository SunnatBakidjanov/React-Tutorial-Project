import { restaurants } from "../../../mock/mock";
import { RestaurantItem } from "./restaurantItem/RestaurantItem";

export const Restaurants = () => {
    return (
        <div className='restaurants'>
            <h1 className='main-title' style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid gray", height: "50px" }}>
                Рестораны
            </h1>

            <ul className='restaurants'>
                {restaurants.map(restaurant => (
                    <li className='restaurants-item' key={restaurant.id}>
                        {console.log(restaurant.name)}
                        <RestaurantItem name={restaurant.name} menu={restaurant.menu} reviews={restaurant.reviews} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
