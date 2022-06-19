import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import useLocalStorage from 'hooks/hooks';
import { useState } from 'react';

import s from './App.module.css';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    for (const { name } of contacts) {
      if (name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${name} is already in contacts.`);
        return;
      }
    }
    setContacts([...contacts, data]);
  };

  const filterNamesAdd = data => {
    setFilter(data);
    filterByName();
  };

  const filterByName = () => {
    return [...contacts].filter(contact =>
      contact.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())
    );
  };

  const findIdEl = id => {
    setContacts([...contacts].filter(contact => contact.id !== id));
  };

  const data = filterByName();
  return (
    <div className={s.app}>
      <h1 className={s.text}>Phonebook</h1>
      <ContactForm submit={formSubmitHandler} />
      <h2 className={s.text}>Contacts</h2>
      <Filter filter={filterNamesAdd} />
      <Contacts data={data} findId={findIdEl} />
    </div>
  );
}

export default App;
