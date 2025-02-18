import { WelcomeSlideContent } from "./WelcomeSlideContent";

import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants/slice";

export const WelcomeSlideContentContainer = ({ id, opacity, transform }) => {
    const restaurantById = useSelector(state => selectRestaurantById(state, id));

    if (!restaurantById) return;

    return <WelcomeSlideContent name={restaurantById.name} opacity={opacity} transform={transform} />;
};
