import { createSlice } from "@reduxjs/toolkit";

type ToggleThemeState = {
  darkMode: boolean;
};

const initialState: ToggleThemeState = {
  darkMode: false,
};

const toggleThemeSlice = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
