import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactThunk, changeContactThunk, deleteContactThunk, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
  
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false;
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
          state.loading = false;
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
          state.items.push(action.payload);
          state.loading = false;
        })
        .addCase(changeContactThunk.fulfilled, (state, action) => {
          const index = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          state.items[index] = action.payload;
          state.loading = false;
        })
        .addCase(logout.fulfilled, () => initialState)
  
        .addMatcher(
          isAnyOf(
            fetchContacts.pending,
            deleteContactThunk.pending,
            addContactThunk.pending,
            changeContactThunk.pending
          ),
          (state) => {
            state.loading = true;
          }
        )
        .addMatcher(
          isAnyOf(
            fetchContacts.rejected,
            deleteContactThunk.rejected,
            addContactThunk.rejected,
            changeContactThunk.rejected
          ),
          (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
        );
    },
  });
  
  export const {
    addContact,
    deleteContact,
    fetchDataSuccess,
    setIsLoading,
    setError,
  } = contactsSlice.actions;
  
  export default contactsSlice.reducer;