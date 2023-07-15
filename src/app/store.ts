import { configureStore } from "@reduxjs/toolkit";
import characterDataReducer from './slice';

export const store = configureStore({
    reducer: {
        characterData: characterDataReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch