import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";

import { Restaurants } from "./Restaurants";

export const RestaurantContainer = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    if (!restaurantsIds) return;

    return <Restaurants restaurantsIds={restaurantsIds} />;
};
