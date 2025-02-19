import { WelcomeSlideContent } from "./WelcomeSlideContent";

import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants/slice";

export const WelcomeSlideContentContainer = ({ id, opacity, transform }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id));

    if (!restaurant) return;

    return <WelcomeSlideContent name={restaurant.name} opacity={opacity} transform={transform} />;
};
