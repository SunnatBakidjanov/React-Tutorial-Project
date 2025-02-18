import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";

import { Dish } from "../dish/Dish";

export const DishContainer = ({ id }) => {
    const dishId = useSelector(state => selectDishById(state, id));

    if (!dishId) return;

    return <Dish dish={dishId.name} price={dishId.price} ingredients={dishId.ingredients} />;
};
