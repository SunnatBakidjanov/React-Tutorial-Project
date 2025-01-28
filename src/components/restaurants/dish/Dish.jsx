import { Counter } from "../counter/Counter";
import { useCount } from "../hooks/useCount";

export const Dish = ({ dish, price, ingredients }) => {
    const countState = useCount();

    return (
        <>
            <p className='dish'>Dish: {dish}</p>
            <p className='price'>Price: {price}</p>
            <p className='ingredients'>Ingredients: {ingredients}</p>

            {/* так можно делать? или лучше {cont={count} и т.д} */}
            <Counter {...countState} />

            <p className='total-cost'>{price * countState.count}</p>
        </>
    );
};
