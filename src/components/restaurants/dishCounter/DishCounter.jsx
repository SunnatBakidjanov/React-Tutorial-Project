import { Counter } from "../counter/Counter";

export const DishCounter = countState => {
    return (
        <>
            <Counter {...countState} />
        </>
    );
};
