
import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts} from './contactsOps'

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
        state.loading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null
      })
      .addCase(fetchContacts.rejected, ((state) => {
        state.error = true;
        state.loading = false;
      }))
  
});

export const selectItems = (state) => state.contacts.items;

export const selectContacts = (state) => state.contacts;


// export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;



  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload)
  //   },
  //   deleteContact: (state, action) => {
  //     const index = state.items.findIndex(task => task.id === action.payload);
        
  //     state.items.splice(index, 1);
  //   },
  // },