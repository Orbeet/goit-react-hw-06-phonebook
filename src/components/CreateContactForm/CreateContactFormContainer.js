import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import CreateContactForm from './CreateContactForm';

const mapDispatchToProps = dispatch => ({
    onAddContact: contact => dispatch(contactsActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(CreateContactForm);
