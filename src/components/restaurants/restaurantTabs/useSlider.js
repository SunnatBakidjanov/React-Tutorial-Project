import { useReducer, useEffect, useRef } from "react";

const CENTRAL_POSITION = { START_INDEX: 0 };
const TRANSITION_DURATION = 400;

const initializeState = restaurants => {
    const startIndex = Math.max(0, Math.min(CENTRAL_POSITION.START_INDEX, restaurants.length - 1));
    const shuffledRestaurants = [...restaurants];
    const centralRestaurant = shuffledRestaurants.splice(startIndex, 1)[0];
    shuffledRestaurants.splice(Math.floor(shuffledRestaurants.length / 2), 0, centralRestaurant);

    return {
        restaurants: shuffledRestaurants,
        offset: 0,
        buttonRef: null,
        isTransitioning: false,
        transitionDuration: TRANSITION_DURATION,
        centralIndex: Math.floor(shuffledRestaurants.length / 2),
        activeStyle: { transform: "scale(1.2)", opacity: "1" },
        inactiveStyle: { transform: "scale(1)", opacity: "0.6" },
    };
};

const ACTIONS = {
    PREV_SLIDE: "PREV_SLIDE",
    NEXT_SLIDE: "NEXT_SLIDE",
    TRANSITION_END: "TRANSITION_END",
};

const sliderReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.PREV_SLIDE:
            return {
                ...state,
                transitionDuration: TRANSITION_DURATION,
                offset: state.offset - state.buttonRef.current.offsetWidth - 50,
                isTransitioning: true,
                transitionDirection: "prev",
                centralIndex: state.centralIndex + 1,
            };

        case ACTIONS.NEXT_SLIDE:
            return {
                ...state,
                transitionDuration: TRANSITION_DURATION,
                offset: state.offset + state.buttonRef.current.offsetWidth + 50,
                isTransitioning: true,
                transitionDirection: "next",
                centralIndex: state.centralIndex - 1,
            };

        case ACTIONS.TRANSITION_END: {
            const updatedRestaurants = [...state.restaurants];
            if (state.transitionDirection === "prev") updatedRestaurants.push(updatedRestaurants.shift());
            if (state.transitionDirection === "next") updatedRestaurants.unshift(updatedRestaurants.pop());

            return {
                ...state,
                transitionDuration: 0,
                offset: 0,
                isTransitioning: false,
                restaurants: updatedRestaurants,
                centralIndex: Math.floor(updatedRestaurants.length / 2),
            };
        }

        default:
            return state;
    }
};

export const useSlider = restaurants => {
    const [state, dispatch] = useReducer(sliderReducer, initializeState(restaurants));
    state.buttonRef = useRef(null);

    const goToPrevSlide = () => dispatch({ type: ACTIONS.PREV_SLIDE });
    const goToNextSlide = () => dispatch({ type: ACTIONS.NEXT_SLIDE });

    useEffect(() => {
        if (!state.isTransitioning) return;

        const transitionTimer = setTimeout(() => {
            dispatch({ type: ACTIONS.TRANSITION_END });
        }, TRANSITION_DURATION);

        return () => clearTimeout(transitionTimer);
    }, [state.isTransitioning]);

    return { ...state, goToPrevSlide, goToNextSlide };
};
