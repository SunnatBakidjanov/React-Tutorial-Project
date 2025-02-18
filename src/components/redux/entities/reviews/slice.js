import { createSlice } from "@reduxjs/toolkit";

import { normalizedReviews } from "../../../../../mock/normalized-mock";

const initialState = {
    ids: normalizedReviews.map(({ id }) => id),
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: {
        selectReviewId: state => state.id,
        selectReviewById: (state, id) => state.entities[id],
    },
});

export const { selectReviewId, selectReviewById } = reviewsSlice.selectors;
