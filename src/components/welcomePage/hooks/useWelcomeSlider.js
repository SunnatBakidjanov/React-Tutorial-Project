import { useReducer, useEffect, useRef } from "react";

const startPosition = 0;

const TRANSFORM_VALUE = {
    START_POSITION: 0,
    RENDER_POSITION: 45,
    END_POSITION: 50,
};

const TIMERS = {
    HIDE_SLIDE: 5000,
    TRANSITION_DURATION: 1000,
    SHOW_SLIDE: 100,
};

const initialValue = restaurants => {
    const validatePosition = Math.max(0, Math.min(restaurants.length - 1, startPosition));

    return {
        opacity: 1,
        transform: TRANSFORM_VALUE.START_POSITION,
        offset: validatePosition,
        activeId: restaurants[validatePosition]?.id,
    };
};

const ACTIONS = {
    HIDE_SLIDE: "HIDE_SLIDE",
    CHANGE_SLIDE: "CHANGE_SLIDE",
    SHOW_SLIDE: "SHOW_SLIDE",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.HIDE_SLIDE: {
            return {
                ...state,
                opacity: 0,
                transform: TRANSFORM_VALUE.RENDER_POSITION,
            };
        }

        case ACTIONS.CHANGE_SLIDE: {
            const nextOffset = state.offset + 1 >= action.restaurants.length ? 0 : state.offset + 1;

            return {
                ...state,
                opacity: 0,
                transform: TRANSFORM_VALUE.END_POSITION,
                offset: nextOffset,
                activeId: action.restaurants[nextOffset]?.id,
            };
        }

        case ACTIONS.SHOW_SLIDE: {
            return {
                ...state,
                opacity: 1,
                transform: TRANSFORM_VALUE.START_POSITION,
            };
        }

        default:
            return state;
    }
};

export const useWelcomeSlider = restaurants => {
    const [state, dispatch] = useReducer(reducer, initialValue(restaurants));

    const timeoutsRef = useRef([]);

    const setSafeTimeout = (callback, delay) => {
        const id = setTimeout(callback, delay);
        timeoutsRef.current.push(id);
    };

    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach(id => clearTimeout(id));
            timeoutsRef.current = [];
        };
    }, []);

    useEffect(() => {
        switch (state.transform) {
            case TRANSFORM_VALUE.START_POSITION:
                setSafeTimeout(() => {
                    dispatch({ type: ACTIONS.HIDE_SLIDE });
                }, TIMERS.HIDE_SLIDE);
                break;

            case TRANSFORM_VALUE.RENDER_POSITION:
                setSafeTimeout(() => {
                    dispatch({ type: ACTIONS.CHANGE_SLIDE, restaurants });
                }, TIMERS.TRANSITION_DURATION);
                break;

            case TRANSFORM_VALUE.END_POSITION:
                setSafeTimeout(() => {
                    dispatch({ type: ACTIONS.SHOW_SLIDE });
                }, TIMERS.SHOW_SLIDE);
                break;

            default:
                dispatch({ type: ACTIONS.SHOW_SLIDE });
        }
    }, [state.transform, restaurants]);

    return { state };
};
