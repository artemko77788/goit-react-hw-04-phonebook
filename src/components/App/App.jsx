import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { Component } from 'react';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    for (const { name } of contacts) {
      if (name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${name} is already in contacts.`);
        return;
      }
    }
    this.setState(previousState => ({
      contacts: [...previousState.contacts, data],
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filterNamesAdd = data => {
    this.setState({
      filter: data,
    });
    this.filterByName();
  };

  filterByName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())
    );
  };

  findIdEl = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const data = this.filterByName();
    return (
      <div className={s.app}>
        <h1 className={s.text}>Phonebook</h1>
        <ContactForm submit={this.formSubmitHandler} />
        <h1 className={s.text}>Contacts</h1>
        <Filter filter={this.filterNamesAdd} />
        <Contacts data={data} findId={this.findIdEl} />
      </div>
    );
  }
}

export default App;
