import { createSlice } from "@reduxjs/toolkit";

const themes = [
  {
    id: 1,
    name: "Green",
    colorCode: "rgb(92, 229, 180)"
  },
  {
    id: 2,
    name: "Blue",
    colorCode: "rgb(54, 116, 181)"
  },
  {
    id: 3,
    name: "Purple",
    colorCode: "rgb(137, 138, 196)"
  },
  {
    id: 4,
    name: "Brown",
    colorCode: "rgb(138, 120, 78)"
  }
];

// initial
const initialState = {
  themes: themes,
  currentTheme: themes.find(item => item.id === 1)
};

// console.log(initialState);

let themeSlice = createSlice({
  name: "theme",

  initialState: initialState,

  reducers: {

    setTheme: (state, action) => {
      const selectedId = action.payload;

      const foundTheme = state.themes.find(themeItem => themeItem.id === selectedId);

      if(foundTheme) {
        state.currentTheme = foundTheme;
      }
    }
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;