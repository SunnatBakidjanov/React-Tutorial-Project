import { useReducer, useEffect } from "react";

const START_POSITION = 0;

const INITIAL_VALUE = restaurants => {
    return {
        opacity: 1,
        transform: 0,
        offset: START_POSITION,
        activeId: restaurants[START_POSITION]?.id,
    };
};

const TIMERS = {
    HIDE_SLIDE: 5000,
    TRANSITION_DURATION: 1000,
    SHOW_SLIDE: 200,
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
                transform: 45,
            };
        }

        case ACTIONS.CHANGE_SLIDE: {
            const nextOffset = state.offset + 1 >= action.restaurants.length ? 0 : state.offset + 1;

            return {
                ...state,
                opacity: 0,
                transform: 50,
                offset: nextOffset,
                activeId: action.restaurants[nextOffset]?.id,
            };
        }

        case ACTIONS.SHOW_SLIDE: {
            return {
                ...state,
                opacity: 1,
                transform: 0,
            };
        }

        default:
            return state;
    }
};

export const useWelcomeSlider = restaurants => {
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUE(restaurants));

    useEffect(() => {
        switch (state.transform) {
            case 0:
                setTimeout(() => {
                    dispatch({ type: ACTIONS.HIDE_SLIDE });
                }, TIMERS.HIDE_SLIDE);
                break;

            case 45:
                setTimeout(() => {
                    dispatch({ type: ACTIONS.CHANGE_SLIDE, restaurants });
                }, TIMERS.TRANSITION_DURATION);
                break;

            case 50:
                setTimeout(() => {
                    dispatch({ type: ACTIONS.SHOW_SLIDE });
                }, TIMERS.SHOW_SLIDE);
                break;

            default:
                return dispatch({ type: ACTIONS.SHOW_SLIDE });
        }
    }, [state.transform, state.offset, restaurants]);

    return { state };
};
