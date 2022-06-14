import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { useState } from 'react';

function ContactForm({ submit }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmite = e => {
    e.preventDefault();
    submit({ id, name, number });
    reset();
  };
  const contactName = e => {
    setName(e.currentTarget.value);
    setId(nanoid());
  };

  const contactNamber = e => {
    setNumber(e.currentTarget.value);
  };

  const nameImputId = nanoid();
  const numberImportId = nanoid();

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmite} className={s.form}>
      <label htmlFor={nameImputId} className={s.label}>
        Name:
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameImputId}
          value={name}
          onChange={contactName}
        />
      </label>
      <label htmlFor={numberImportId} className={s.label}>
        Number:
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          id={numberImportId}
          onChange={contactNamber}
        />
      </label>

      <button type="submite" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
