import { configureStore } from "@reduxjs/toolkit";

import globalReducer from "./slices/globalSlice";
import userReducer from "./slices/userSlice";
import responseReducer from "./slices/responseSlice";
import questionReducer from "./slices/questionSlice";
import symptomReducer from "./slices/symptomSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        user: userReducer,
        response: responseReducer,
        question: questionReducer,
        symptom: symptomReducer,
    },
});

export default store;
