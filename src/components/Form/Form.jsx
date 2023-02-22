import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'

export function Form (props) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    switch (inputName) {
      case "name":
        setName(inputValue);
        break;
      case "number":
        setNumber(inputValue);
        break;
      default:
        break;
    } 

  };

 const  handleSubmit = event => {
    event.preventDefault();
    const contact = {
        name: name,
        number: number,
    };

   props.onSubmit(contact);
   
   setName('');
   setNumber('');
  };

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

        <button type="submit" className={css.buttonSubmit}>Add contact</button>
      </form>
    );

}

  Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };