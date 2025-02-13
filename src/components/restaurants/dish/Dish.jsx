import { use } from "react";

import { AuthContext } from "../../contexts/authorization";

import { Counter } from "../counter/Counter";
import { useCount } from "../hooks/useCount";

export const Dish = ({ dish, price, ingredients }) => {
    const { auth } = use(AuthContext);

    const countState = useCount();

    return (
        <>
            <p className='dish'>Dish: {dish}</p>
            <p className='price'>Price: {price}</p>
            <p className='ingredients'>Ingredients: {ingredients}</p>

            {auth.isAuthed ? <Counter {...countState} price={price} /> : null}
        </>
    );
};
