import { useCount } from "./useCount";

export const Dish = ({ dish, price, ingredients }) => {
    const { count, onIncrement, onDecrement } = useCount();

    return (
        <>
            <p className='dish'>Dish: {dish}</p>
            <p className='price'>Price: {price}</p>
            <p className='ingredients'>Ingredients: {ingredients}</p>

            <button style={{ width: "20px", height: "20px" }} onClick={onDecrement}>
                -
            </button>
            <p>{count}</p>
            <button style={{ width: "20px", height: "20px" }} onClick={onIncrement}>
                +
            </button>

            <p className='total-cost'>Total cost: {price * count}</p>
        </>
    );
};
