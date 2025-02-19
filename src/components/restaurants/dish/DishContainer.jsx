import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";

import { Dish } from "../dish/Dish";

export const DishContainer = ({ id }) => {
    const dish = useSelector(state => selectDishById(state, id));

    if (!dish) return;

    return <Dish dish={dish.name} price={dish.price} ingredients={dish.ingredients} />;
};
