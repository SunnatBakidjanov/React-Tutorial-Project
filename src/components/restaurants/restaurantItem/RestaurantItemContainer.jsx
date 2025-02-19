import { useSelector } from "react-redux";

import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantItem } from "./RestaurantItem";

export const RestaurantItemContainer = ({ id }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id));

    if (!restaurant) return;

    return <RestaurantItem name={restaurant.name} menuId={restaurant.menu} reviewsIds={restaurant.reviews} id={id} />;
};
