import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";

import { Button } from "./Button";

export const ButtonTabContainer = ({ id, setActiveRestaurant }) => {
    const restaurantById = useSelector(state => selectRestaurantById(state, id));

    if (!restaurantById) return;

    return <Button text={restaurantById.name} onClick={setActiveRestaurant} />;
};
