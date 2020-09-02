import { createAction } from '@reduxjs/toolkit';

export const loadContacts = createAction('LOADCONTACTS', () => ({
    payload: {},
}));

export const addContact = createAction('ADDCONTACT', contact => ({
    payload: { contact },
    meta: { addContact: true },
}));

export const deleteContact = createAction('DELETECONTACT', id => ({
    payload: { id },
}));

export const changeFilter = createAction('CHANGEFILTER', filter => ({
    payload: { filter },
}));
