import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './Form.module.css'
import { addName, addNumber, setContacts } from 'redux/contacts/contactsSlice';

export function Form() {
  
  const contacts = useSelector(state => state.contactData.contacts);

  const dispatch = useDispatch();

  const name = useSelector(state => state.contactData.name) ?? '';
  const number = useSelector(state => state.contactData.number) ?? '';

  const handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    switch (inputName) {
      case 'name':
        dispatch(addName(inputValue));
        break;
      case 'number':
        dispatch(addNumber(inputValue));
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: name,
      number: number,
    };

    addContact(contact);
    dispatch(addName(''));
    dispatch(addNumber(''));
  };

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

    dispatch(setContacts([...contacts, finalContact]));
  }

  return (
    <form onSubmit={handleSubmit} className={css.formContact}>
      <label>
        <div>Name</div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <div>Number</div>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.buttonSubmit}>
        Add contact
      </button>
    </form>
  );
}

