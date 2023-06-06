import { createSlice } from "@reduxjs/toolkit";

export const responseSlice = createSlice({
    name: "response",
    initialState: {
        response: {},
    },
    reducers: {
        setResponse: (state, action) => {
            state.response = action.payload;
        },
    },
});

export const { setResponse } = responseSlice.actions;

export default responseSlice.reducer;
