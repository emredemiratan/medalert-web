import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        loading: false,
    },
    reducers: {
        switchLoadingStatus: (state) => {
            state.loading = !state.loading;
        },
    },
});

export const { switchLoadingStatus } = globalSlice.actions;

export default globalSlice.reducer;
