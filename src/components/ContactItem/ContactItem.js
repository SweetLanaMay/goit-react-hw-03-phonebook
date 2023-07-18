import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={css.contactsItem}>
    {contact.name}: {contact.number}
    <button
      className={css.deleteBtn}
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
