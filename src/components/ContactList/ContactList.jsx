import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
