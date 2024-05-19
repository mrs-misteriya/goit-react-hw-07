
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps'
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder.
      addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, ((state) => {
        state.error = true;
        state.loading = false;
      })).addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload)
        state.loading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, ((state) => {
        state.error = true;
        state.loading = false;
      }))
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items= state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, ((state) => {
        state.error = true;
        state.loading = false;
      }))  
});


export const selectContacts = (state) => state.contacts;
const selectContactItems = (state) => state.contacts.items;


export const selectFilteredContacts = createSelector([selectContactItems, selectNameFilter], (contacts, filterContacts ) => { return contacts.filter((contact) => contact.name.toLowerCase().includes(filterContacts.toLowerCase())) })


export default contactsSlice.reducer;
