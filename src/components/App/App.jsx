import { Component } from 'react';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleContactAdd = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleContactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.container}>
        <h1 className={css.phoneBookTitle}>PhoneBook</h1>
        <PhoneBook contacts={contacts} onContactAdd={this.handleContactAdd} />
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter
          contacts={contacts}
          onDeleteContact={this.handleContactDelete}
        />
      </div>
    );
  }
}
