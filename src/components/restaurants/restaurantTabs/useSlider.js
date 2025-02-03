import { useReducer, useEffect } from "react";

const TRANSITION_DELAY = 400;
const STEP = 300; // равен ширине слайда

const centralPositionConfig = { startingPosition: 0 };

const INITIAL_VALUE = restaurants => {
    const startingPosition = Math.max(0, Math.min(centralPositionConfig.startingPosition, restaurants.length - 1));

    const shuffledRestaurants = [...restaurants];
    const centralRestaurant = shuffledRestaurants.splice(startingPosition, 1)[0];
    shuffledRestaurants.splice(Math.floor(shuffledRestaurants.length / 2), 0, centralRestaurant);

    return {
        restaurants: shuffledRestaurants,
        offset: 0,
        disable: false,
        transitionDelay: TRANSITION_DELAY,
        direction: null,
        centralElement: Math.floor(shuffledRestaurants.length / 2),
        activeElement: { transform: "scale(1.2)", opacity: "1" },
        inactivelElement: { transform: "scale(1)", opacity: "0.6" },
    };
};

const PREV_SLIDE = "PREV_SLIDE";
const NEXT_SLIDE = "NEXT_SLIDE";
const TRANSITION_END = "TRANSITION_END";

const reducer = (state, { type }) => {
    switch (type) {
        case PREV_SLIDE:
            return {
                ...state,
                transitionDelay: TRANSITION_DELAY,
                offset: state.offset - STEP,
                disable: true,
                direction: "prev",
                centralElement: state.centralElement + 1,
                inactivelElement: { transform: "scale(1)", opacity: "0.6" },
                activeElement: { transform: "scale(1.2)", opacity: "1" },
            };

        case NEXT_SLIDE:
            return {
                ...state,
                disable: true,
                direction: "next",
                centralElement: state.centralElement - 1,
                transitionDelay: TRANSITION_DELAY,
                offset: state.offset + STEP,
                inactivelElement: { transform: "scale(1)", opacity: "0.6" },
                activeElement: { transform: "scale(1.2)", opacity: "1" },
            };

        case TRANSITION_END: {
            let updatedRestaurants = [...state.restaurants];

            if (state.direction === "prev") updatedRestaurants.push(updatedRestaurants.shift());
            if (state.direction === "next") updatedRestaurants.unshift(updatedRestaurants.pop());

            return {
                ...state,
                transitionDelay: 0,
                offset: 0,
                disable: false,
                restaurants: updatedRestaurants,
                centralElement: updatedRestaurants.length / 2,
            };
        }

        default:
            return state;
    }
};

export const useSlider = restaurants => {
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUE(restaurants));

    const prevSlide = () => dispatch({ type: PREV_SLIDE });
    const nextSlide = () => dispatch({ type: NEXT_SLIDE });

    useEffect(() => {
        if (!state.disable) return;

        const timeout = setTimeout(() => {
            dispatch({ type: TRANSITION_END });
        }, TRANSITION_DELAY);

        return () => clearTimeout(timeout);
    }, [state.disable]);

    return { ...state, prevSlide, nextSlide };
};
