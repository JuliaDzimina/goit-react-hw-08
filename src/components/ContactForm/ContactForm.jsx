import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

const ContactFormShema = Yup.object({
  name: Yup.string()
    .min(3, "*Too short!")
    .max(50, "*Too long!")
    .required("*Required"),
  number: Yup.string()
    .min(3, "*Too short!")
    .max(50, "*Too long!")
    .required("*Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const onAddContact = (newContact) => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };
    dispatch(addContact(contact));
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormShema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameId}
        ></Field>
        <ErrorMessage
          component="span"
          className={css.errorMessage}
          name="name"
        />
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage
          component="span"
          className={css.errorMessage}
          name="number"
        />
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
