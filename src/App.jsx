import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./contacts.json";
import { nanoid } from "nanoid";

const LS_KEY = "saved-contscts";

function App() {
  const [contacts, setContacts] = useState(initialContacts);

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

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
