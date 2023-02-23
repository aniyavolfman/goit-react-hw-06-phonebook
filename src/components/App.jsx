import React from 'react';
import { Container } from './Container/Container';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { setContacts, setFilter } from 'redux/contacts/contactsSlice';

export function App() {
  // const contacts = useSelector(state => state.contactData.contacts);
  // const filter = useSelector(state => state.contactData.filter);

  // const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contucts')) ?? [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  
  // const [filter, setFilter] = useState('');


  // useEffect(() => {
    // const stringifiedContacts = JSON.stringify(contacts);
    // localStorage.setItem('contucts', stringifiedContacts);
  // }, []);

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    );
  }
