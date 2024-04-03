import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./contacts.json";
import { nanoid } from "nanoid";

const LS_KEY = "saved-contscts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContact = localStorage.getItem(LS_KEY);
    return JSON.parse(stringifiedContact) || initialContacts;
  });

  const [search, setSearch] = useState(" ");

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalContacts = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, finalContacts]);
  };

  const onDelete = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((prevContact) => prevContact.id !== contactId)
    );
  };

  const filteredContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filteredContact} onDelete={onDelete} />
    </div>
  );
}

export default App;
