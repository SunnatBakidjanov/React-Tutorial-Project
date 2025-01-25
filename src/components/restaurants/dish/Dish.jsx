import { DishCounter } from "../dishCounter/DishCounter";
import { useCount } from "../hooks/useCount";

export const Dish = ({ dish, price, ingredients }) => {
    const countState = useCount(0, 5);

    return (
        <>
            <p className='dish'>Dish: {dish}</p>
            <p className='price'>Price: {price}</p>
            <p className='ingredients'>Ingredients: {ingredients}</p>

            <DishCounter {...countState} />

            <p className='total-cost'>{price * countState.count}</p>
        </>
    );
};
