import { useReducer } from "react";

const INITIAL_VALUE = {
    address: "",
    message: "",
    rating: 5,
};

const SET_ADDRESS_ACTION = "SET_ADDRESS";
const SET_MESSAGE_ACTION = "SET_MESSAGE";
const SET_INCREMENT_ACTION = "SET_INCREMENT";
const SET_DECREMENT_ACTION = "SET_DECREMENT";
const CLEAR_ACTION = "CLEAR_ACTION";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_ADDRESS_ACTION:
            return { ...state, address: payload };
        case SET_MESSAGE_ACTION:
            return { ...state, message: payload };
        case SET_INCREMENT_ACTION:
            return { ...state, rating: Math.min(state.rating + 1, 5) };
        case SET_DECREMENT_ACTION:
            return { ...state, rating: Math.max(state.rating - 1, 0) };
        case CLEAR_ACTION:
            return INITIAL_VALUE;
        default:
            return state;
    }
};

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

    const setAddress = address => {
        dispatch({ type: SET_ADDRESS_ACTION, payload: address });
    };

    const setMessage = message => {
        dispatch({ type: SET_MESSAGE_ACTION, payload: message });
    };

    const setIncrement = () => {
        dispatch({ type: SET_INCREMENT_ACTION });
    };

    const setDecrement = () => {
        dispatch({ type: SET_DECREMENT_ACTION });
    };

    const clearForm = () => {
        dispatch({ type: CLEAR_ACTION });
    };

    return {
        form,
        setAddress,
        setMessage,
        setIncrement,
        setDecrement,
        clearForm,
    };
};
