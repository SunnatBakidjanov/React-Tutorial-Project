import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";

import { Restaurants } from "./Restaurants";

export const RestaurantContainer = () => {
    const restaurants = useSelector(selectRestaurantsIds);

    if (!restaurants) return;

    return <Restaurants restaurants={restaurants} />;
};
