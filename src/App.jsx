import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";

import Loader from "./components/Loader/Loader";
import { selectError, selectLoading } from "./redux/contacts/selectors";
import { fetchContacts } from "./redux/contacts/operations";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <div>Error!</div>}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}

export default App;
