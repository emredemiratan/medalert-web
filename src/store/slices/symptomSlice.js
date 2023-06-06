import { createSlice } from "@reduxjs/toolkit";

export const symptomSlice = createSlice({
    name: "symptom",
    initialState: {
        symptoms: [],
    },
    reducers: {
        setSymptoms: (state, action) => {
            state.symptoms = action.payload;
        },
    },
});

export const { setSymptoms } = symptomSlice.actions;

export default symptomSlice.reducer;
