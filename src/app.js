import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import PostList from './components/PostList';

const App = () => {
    return (
        <ContactProvider>
            <div>
                <h1>Contact Management App</h1>
                <ContactList />
                <ContactDetails />
                <PostList />
            </div>
        </ContactProvider>
    );
};

export default App;
