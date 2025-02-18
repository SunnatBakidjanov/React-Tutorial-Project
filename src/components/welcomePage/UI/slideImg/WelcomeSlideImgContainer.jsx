import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants/slice";

import { WelcomeSlideImg } from "./WelcomeSlideImg";

export const WelcomeSliceImgContainer = ({ id, opacity, transform }) => {
    const restaurantById = useSelector(state => selectRestaurantById(state, id));

    return <WelcomeSlideImg id={restaurantById.id} opacity={opacity} transform={transform} />;
};
