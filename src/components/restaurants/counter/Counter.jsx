import { use } from "react";

import { AuthContext } from "../../contexts/authorization";

export const Counter = ({ count, price, onIncrement, onDecrement }) => {
    const { auth } = use(AuthContext);

    return auth.isAuthed ? (
        <>
            <button type='button' style={{ width: "20px", height: "20px" }} onClick={onDecrement}>
                -
            </button>
            <p>{count}</p>
            <button type='button' style={{ width: "20px", height: "20px" }} onClick={onIncrement}>
                +
            </button>

            <p className='total-cost'>{price * count || 0}</p>
        </>
    ) : null;
};
