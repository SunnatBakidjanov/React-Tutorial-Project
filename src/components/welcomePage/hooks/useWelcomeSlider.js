import { useReducer, useEffect } from "react";

const INITIAL_VALUE = {
    opacity: 1,
    transform: 0,
    offset: 0,
};

const TIMERS = {
    HIDE_SLIDE: 6000,
    SHOW_SLIDE: 1100, // transition: opacity 1s ease-out
};

const ACTIONS = {
    HIDE_SLIDE: "HIDE_SLIDE",
    SHOW_SLIDE: "SHOW_SLIDE",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.HIDE_SLIDE: {
            return {
                ...state,
                opacity: 0,
                transform: 50,
            };
        }

        case ACTIONS.SHOW_SLIDE: {
            return {
                ...state,
                opacity: 1,
                transform: 0,
                offset: state.offset + 1 >= action.length ? 0 : state.offset + 1,
            };
        }

        default:
            return state;
    }
};

export const useWelcomeSlider = length => {
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

    useEffect(() => {
        if (state.opacity === 1) {
            const hideSlideTimer = setTimeout(() => {
                dispatch({ type: ACTIONS.HIDE_SLIDE });
            }, TIMERS.HIDE_SLIDE);

            return () => clearTimeout(hideSlideTimer);
        }

        if (state.opacity === 0) {
            const showSlide = setTimeout(() => {
                dispatch({ type: ACTIONS.SHOW_SLIDE, length });
            }, TIMERS.SHOW_SLIDE);

            return () => clearTimeout(showSlide);
        }
    }, [state.opacity, state.offset, length]);

    return { state };
};
