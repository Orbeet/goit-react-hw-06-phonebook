import { connect } from 'react-redux';

import * as contactsActions from '../../redux/contacts/contactsActions';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';

import ContactsList from './ContactsList';

const mapStateToProps = state => ({
    contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
    onLoadContacts: () => dispatch(contactsActions.loadContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
