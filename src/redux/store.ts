import { configureStore } from '@reduxjs/toolkit';
import { PhonebookSlice } from './PhonebookSlice';



export const store = configureStore({
  reducer: {
    contacts: PhonebookSlice.reducer,    
  },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

  


