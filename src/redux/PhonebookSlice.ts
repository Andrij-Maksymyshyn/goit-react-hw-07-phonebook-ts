import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as contactsApi from '../services/contacts-api';


export type TContact = {
  id: string,
  name: string,
  phone: string,
  createdAt?: string,
};

export type TContactsState = {
  items: TContact[],
  filter: string | false,
  isLoading: boolean,
  error: any | null,

  };

const initialState: TContactsState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};



export const fetchContacts = createAsyncThunk<TContact[], void, {rejectValue: string}>
  ('contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
        try {
             const contacts = await contactsApi.fetchContacts();
             return contacts;
        } catch (error: any | string) {
            return rejectWithValue(error);
        }
  });
    
  export const removeContact = createAsyncThunk
  ('contacts/removeContact',
    async (contactId: string, { rejectWithValue, dispatch }) => {
        try {
            const contact = await contactsApi.fetchContactByIdRem(contactId);
            console.log(contact);            

            dispatch(deleteItem(contactId));
            
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const addContact = createAsyncThunk('contacts/addContact',
      async (contact: TContact, { rejectWithValue, dispatch }) => {
        try {
            const newContact = await contactsApi.fetchContactAdd(contact);
           
            dispatch(addItem(newContact));
            
        } catch (error) {
            return rejectWithValue(error);
        }
    });


export const PhonebookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TContact>) {
      state.items.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<TContact | string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },    
  },



  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false; 
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.items.push(action.payload);
        };        
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  }   
});

export const { addItem, deleteItem, updateFilter } = PhonebookSlice.actions;



