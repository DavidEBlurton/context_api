import React from 'react';
import { useContacts } from '../context/ContactContext';

const ContactList = () => {
    const { contacts, setSelectedContact } = useContacts();

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id} onClick={() => setSelectedContact(contact)}>
                        {contact.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
