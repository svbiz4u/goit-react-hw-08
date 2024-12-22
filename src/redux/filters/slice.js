import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    name: "",
  };
  
  const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
      setSearchTerm: (state, action) => {
        state.name = action.payload;
        state.filter = action.payload;
      },
    },
  });
  
  export const { setSearchTerm } = filtersSlice.actions;
  export const filtersReducer = filtersSlice.reducer;