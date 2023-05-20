import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        loading: false,
    },
    reducers: {
        switchLoadingStatus: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { switchLoadingStatus } = globalSlice.actions;

export default globalSlice.reducer;
