import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: { name: "", surname: "" },
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
