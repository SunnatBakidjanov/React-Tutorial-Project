import { useState } from "react";

export const useCount = ({ min = 0, max = 5 } = {}) => {
    const [count, setCount] = useState(min);

    const onIncrement = () => setCount(value => Math.min(value + 1, max));
    const onDecrement = () => setCount(value => Math.max(value - 1, min));

    return {
        count,
        onIncrement,
        onDecrement,
    };
};
