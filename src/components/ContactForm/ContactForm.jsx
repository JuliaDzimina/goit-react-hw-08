import { Field, Form, Formik } from "formik";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="name"></Field>
        <Field type="text" name="number"></Field>
        <button type="submit"> Add contact </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
