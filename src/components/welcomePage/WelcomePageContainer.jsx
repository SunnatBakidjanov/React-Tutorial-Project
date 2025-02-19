import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";

import { WelcomePage } from "./WelcomePage";

export const WelcomePageContainer = () => {
    const restaurants = useSelector(selectRestaurantsIds);

    if (!restaurants) return;

    return <WelcomePage restaurants={restaurants} />;
};
