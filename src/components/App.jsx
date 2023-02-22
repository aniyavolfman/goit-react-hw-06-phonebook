import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contucts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contucts', stringifiedContacts);
  }, [contacts]);
  
  const addContact = contact => {
    if (
      contacts.some(
        contactItem =>
          contactItem.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`Oops, ${contact.name} is already in contacts!`);
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    setContacts([...contacts, finalContact]);
  }

    const handleFilter = ({ target: { value } }) => {
      setFilter(value);
    };

    const handleDelete = event => {
      setContacts(prevState => prevState.filter(el => el.id !== event.target.id))
    };

    const filteredContacts = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={handleFilter} />
        <ContactsList
          contacts={filteredContacts}
          onButtonDelete={handleDelete}
        />
      </Container>
    )
}
