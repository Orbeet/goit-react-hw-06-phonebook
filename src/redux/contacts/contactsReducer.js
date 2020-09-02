import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    deleteContact,
    loadContacts,
    changeFilter,
    addContact,
} from './contactsActions';

import * as ls from '../../helpers/saveLocalStorage';

const contactsReducer = createReducer([], {
    [loadContacts]: () => ls.toGetContacts(),
    [addContact]: (state, action) =>
        ls.toAddContacts(state, action.payload.contact),
    [deleteContact]: (state, action) =>
        ls.toDeleteContacts(state, action.payload.id),
});

const filterReducer = createReducer('', {
    [changeFilter]: (state, action) => action.payload.filter,
    [deleteContact]: () => '',
});

const contactsListReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export default contactsListReducer;
