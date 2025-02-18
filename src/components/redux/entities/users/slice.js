import { createSlice } from "@reduxjs/toolkit";

import { normalizedUsers } from "../../../../../mock/normalized-mock";

const initialState = {
    ids: normalizedUsers.map(({ id }) => id),
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    selectors: {
        selectUserByEntities: state => state.entities,
    },
});

export const { selectUserByEntities } = usersSlice.selectors;
