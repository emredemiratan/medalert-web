import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "question",
    initialState: {
        questions: [],
    },
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
    },
});

export const { setQuestions } = questionSlice.actions;

export default questionSlice.reducer;
