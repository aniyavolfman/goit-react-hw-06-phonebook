import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contactData: contactsReducer,
  },
});

export const persistor = persistStore(store);
