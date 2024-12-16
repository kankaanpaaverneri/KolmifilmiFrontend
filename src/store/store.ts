import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../slices/languageSlice";

export const store = configureStore({
  reducer: { languageReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
