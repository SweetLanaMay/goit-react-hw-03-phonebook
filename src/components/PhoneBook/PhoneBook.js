import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './PhoneBook.module.css';

class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(
        `Contact with the name ${name} already exists! Please enter a different name.`
      );
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState({ name: '', number: '' });
      this.props.onContactAdd(newContact);
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.phoneBookForm} onSubmit={this.handleFormSubmit}>
        <label className={css.formName}>
          Name
          <input
            value={name}
            onChange={this.handleNameChange}
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formName}>
          Number
          <input
            value={number}
            onChange={this.handleNumberChange}
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}
export default PhoneBook;
