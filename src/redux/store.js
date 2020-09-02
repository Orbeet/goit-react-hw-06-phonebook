import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsListReducer from './contacts/contactsReducer';
import alertReducer from './alert/alertReducer';

import validation from './middleware/validation';

const store = configureStore({
    reducer: {
        contactsList: contactsListReducer,
        alert: alertReducer,
    },
    middleware: [...getDefaultMiddleware(), validation],
});

export default store;
