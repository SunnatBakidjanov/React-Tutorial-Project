import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";

import { Restaurants } from "./Restaurants";

export const RestaurantContainer = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    return <Restaurants restaurantsIds={restaurantsIds} />;
};
