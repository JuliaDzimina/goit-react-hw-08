import { HiUser, HiPhone } from "react-icons/hi";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={css.wrapperContact}>
      <p>
        <HiUser />
        {name}
      </p>
      <p>
        <HiPhone />
        {number}
      </p>
      <button onClick={() => onDelete(id)}> Delete</button>
    </li>
  );
};

export default Contact;
