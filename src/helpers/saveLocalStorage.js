export const toGetContacts = () => {
    try {
        const savedContacts = localStorage.getItem('contacts');

        if (!savedContacts) return [];

        return JSON.parse(savedContacts);
    } catch (error) {
        return [];
    }
};

export const toAddContacts = (contacts, contact) => {
    try {
        const newContacts = [...contacts, contact];
        localStorage.setItem('contacts', JSON.stringify(newContacts));
        return newContacts;
    } catch (error) {
        return contacts;
    }
};

export const toDeleteContacts = (contacts, id) => {
    try {
        const newContacts = contacts.filter(contact => contact.id !== id);
        localStorage.setItem('contacts', JSON.stringify(newContacts));
        return newContacts;
    } catch (error) {
        return contacts;
    }
};
