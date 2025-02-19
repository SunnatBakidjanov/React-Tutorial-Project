import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants/slice";

import { WelcomeSlideImg } from "./WelcomeSlideImg";

export const WelcomeSliceImgContainer = ({ id, opacity, transform }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id));

    if (!restaurant) return;

    return <WelcomeSlideImg id={restaurant.id} opacity={opacity} transform={transform} />;
};
