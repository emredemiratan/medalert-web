import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: {},
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
    },
});

export const { setProfile } = userSlice.actions;

export default userSlice.reducer;
