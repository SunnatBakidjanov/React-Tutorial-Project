import { useReducer, useEffect, useRef } from "react";

const START_POSITION = 0;

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

const initialValue = restaurantsIds => {
    const validatePosition = Math.max(0, Math.min(restaurantsIds.length - 1, START_POSITION));

    return {
        opacity: 1,
        transform: TRANSFORM_VALUE.START_POSITION,
        offset: validatePosition,
        activeId: restaurantsIds[validatePosition],
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
            const nextOffset = state.offset + 1 >= action.restaurantsIds.length ? 0 : state.offset + 1;

            return {
                ...state,
                opacity: 0,
                transform: TRANSFORM_VALUE.END_POSITION,
                offset: nextOffset,
                activeId: action.restaurantsIds[nextOffset],
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

export const useWelcomeSlider = restaurantsIds => {
    const [state, dispatch] = useReducer(reducer, initialValue(restaurantsIds));
    const timeoutsRef = useRef([]);

    useEffect(() => {
        const setSafeTimeout = (callback, delay) => {
            const id = setTimeout(callback, delay);
            timeoutsRef.current.push(id);
        };

        switch (state.transform) {
            case TRANSFORM_VALUE.START_POSITION:
                setSafeTimeout(() => {
                    dispatch({ type: ACTIONS.HIDE_SLIDE });
                }, TIMERS.HIDE_SLIDE);
                break;

            case TRANSFORM_VALUE.RENDER_POSITION:
                setSafeTimeout(() => {
                    dispatch({ type: ACTIONS.CHANGE_SLIDE, restaurantsIds });
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

        return () => {
            timeoutsRef.current.forEach(id => clearTimeout(id));
            timeoutsRef.current = [];
        };
    }, [state.transform, restaurantsIds]);

    return { state };
};
