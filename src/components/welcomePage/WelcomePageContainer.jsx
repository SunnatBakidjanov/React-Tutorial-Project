import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";

import { WelcomePage } from "./WelcomePage";

export const WelcomePageContainer = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    if (!restaurantsIds) return;

    return <WelcomePage restaurantsIds={restaurantsIds} />;
};
