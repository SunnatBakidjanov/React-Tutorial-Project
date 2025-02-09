import { Counter } from "../counter/Counter";
import { useCount } from "../hooks/useCount";

export const Dish = ({ dish, price, ingredients }) => {
    const countState = useCount();

    return (
        <>
            <p className='dish'>Dish: {dish}</p>
            <p className='price'>Price: {price}</p>
            <p className='ingredients'>Ingredients: {ingredients}</p>

            <Counter {...countState} price={price} />
        </>
    );
};
