import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language } from "../types/type";

export interface LanguageState {
  selectedLanguage: Language;
}

const initialState: LanguageState = {
  selectedLanguage: "fi",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.selectedLanguage = action.payload;
    },
  },
});
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
