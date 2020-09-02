export default (contacts, filter) =>
    contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
