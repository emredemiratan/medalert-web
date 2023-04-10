import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/globalSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
    },
});

export default store;
