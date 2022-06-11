import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = { id: '', name: '', number: '' };

  handleImputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    this.setState({ id: nanoid() });
  };

  handleSubmite = e => {
    e.preventDefault();
    this.props.submit(this.state);
    this.reset();
  };

  nameImputId = nanoid();
  numberImportId = nanoid();

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmite} className={s.form}>
        <label htmlFor={this.nameImputId} className={s.label}>
          Name:
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameImputId}
            value={this.state.name}
            onChange={this.handleImputChange}
          />
        </label>
        <label htmlFor={this.numberImportId} className={s.label}>
          Number:
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            id={this.numberImportId}
            onChange={this.handleImputChange}
          />
        </label>

        <button type="submite" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
