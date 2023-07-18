import React, { Component } from 'react';
import ContactList from '../ContactList';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts } = this.props;
    const { filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <label className={css.filterLabel}>
          Find contacts by name
          <input
            type="text"
            value={filter}
            onChange={this.handleFilterChange}
            placeholder="Search contacts"
            className={css.filterInput}
          />
        </label>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.props.onDeleteContact}
        />
      </>
    );
  }
}

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleContactDelete: PropTypes.func,
};

export default Filter;
