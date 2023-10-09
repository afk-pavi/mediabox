import { configureStore } from "@reduxjs/toolkit";
import auhtReducer from "./auth/auth-slice";

const store = configureStore({
    reducer: {
        auth: auhtReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store