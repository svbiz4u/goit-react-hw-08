import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";


export const selectNameFilter = (state) => state.filters.name.toLowerCase();
export const selectNumberFilter = (state) => state.filters.number;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    let filteredContacts = contacts;
    if (nameFilter) {
      filteredContacts = filteredContacts.filter((contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (numberFilter) {
      filteredContacts = filteredContacts.filter((contact) =>
        contact.number.includes(numberFilter)
      );
    }
    return filteredContacts;
  }
);