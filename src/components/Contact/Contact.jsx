import { HiUser, HiPhone } from "react-icons/hi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = (userId) => {
    dispatch(deleteContact(userId));
  };

  return (
    <li className={css.wrapperContact}>
      <div className={css.contact}>
        <p className={css.info}>
          <HiUser />
          {name}
        </p>
        <p className={css.info}>
          <HiPhone />
          {number}
        </p>
      </div>

      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        {" "}
        Delete
      </button>
    </li>
  );
};

export default Contact;
