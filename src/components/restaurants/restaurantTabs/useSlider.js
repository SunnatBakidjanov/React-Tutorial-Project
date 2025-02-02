import { useReducer } from "react";

const INITIAL_VALUE = restaurants => {
    return {
        offset: 0,
        disable: false,
        transitionDelay: TRANSITION_DELAY,
        direction: null,
        restaurants,
    };
};

const PREV_SLIDE = "PREV_SLIDE";
const NEXT_SLIDE = "NEXT_SLIDE";
const TRANSITION_END = "TRANSITION_END";
const TRANSITION_DELAY = 0.6;
const STEP = 300;

const reducer = (state, { type }) => {
    switch (type) {
        case PREV_SLIDE:
            return { ...state, transitionDelay: TRANSITION_DELAY, offset: state.offset - STEP, disable: true, direction: "prev" };
        case NEXT_SLIDE:
            return { ...state, transitionDelay: TRANSITION_DELAY, offset: state.offset + STEP, disable: true, direction: "next" };
        case TRANSITION_END: {
            let updatedRestaurants = [...state.restaurants];

            if (state.direction === "prev") {
                updatedRestaurants = [...updatedRestaurants.slice(1), updatedRestaurants[0]];
            }

            if (state.direction === "next") {
                updatedRestaurants = [updatedRestaurants[updatedRestaurants.length - 1], ...updatedRestaurants.slice(0, -1)];
            }

            return {
                ...state,
                transitionDelay: 0,
                offset: 0,
                disable: false,
                restaurants: updatedRestaurants,
            };
        }
        default:
            return state;
    }
};

export const useSlider = restaurants => {
    const [{ offset, disable, transitionDelay, restaurants: updateRestaurants }, dispatch] = useReducer(reducer, INITIAL_VALUE(restaurants));

    const prevSlide = () => dispatch({ type: PREV_SLIDE });
    const nextSlide = () => dispatch({ type: NEXT_SLIDE });
    const transitionEnd = () => dispatch({ type: TRANSITION_END });

    return { offset, disable, transitionDelay, restaurants: updateRestaurants, prevSlide, nextSlide, transitionEnd };
};
