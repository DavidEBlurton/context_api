import React from 'react';
import { useContacts } from '../context/ContactContext';

const ContactDetails = () => {
    const { selectedContact } = useContacts();

    if (!selectedContact) {
        return <div>Select a contact to see details</div>;
    }

    return (
        <div>
            <h2>Contact Details</h2>
            <p>Name: {selectedContact.name}</p>
            <p>Phone: {selectedContact.phone}</p>
        </div>
    );
};

export default ContactDetails;
