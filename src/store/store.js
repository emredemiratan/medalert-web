import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/globalSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        user: userReducer,
    },
});

export default store;
