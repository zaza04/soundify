import { createSlice } from "@reduxjs/toolkit";

const themes = [
  {
    id: 1,
    name: "Green",
    colorCode: "#5CE5BC",
  },
  {
    id: 2,
    name: "Blue",
    colorCode: "#3674B5",
  },
  {
    id: 3,
    name: "Purple",
    colorCode: "#898AC4",
  },
  {
    id: 4,
    name: "Brown",
    colorCode: "#8A784E",
  },
  {
    id: 5,
    name: "Dark Green",
    colorCode: "#626F47",
  },
];

// initialState
const initialTheme = {
  themes: themes,
  currentTheme: {
    id: 1,
    name: "Green",
    colorCode: "#5CE5BC",
  },
  mixTheme: false,
};

const themeSlice = createSlice({
  name: "theme",

  initialState: initialTheme,

  reducers: {
    setTheme: (state, action) => {
      const selectedId = action.payload;

      const foundTheme = state.themes.find(
        (themeItem) => themeItem.id === selectedId
      );

      if (foundTheme) {
        state.currentTheme = foundTheme;
        state.mixTheme = false;
      }
    },
    autoTheme: (state, action) => {
      if (action.payload) {
        state.mixTheme = action.payload;
        state.currentTheme = {};
      }
    },
  },
});

export const { setTheme, autoTheme } = themeSlice.actions;

export default themeSlice.reducer;
