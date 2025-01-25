export const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <>
            <button style={{ width: "20px", height: "20px" }} onClick={onDecrement}>
                -
            </button>
            <p>{count}</p>
            <button style={{ width: "20px", height: "20px" }} onClick={onIncrement}>
                +
            </button>
        </>
    );
};
