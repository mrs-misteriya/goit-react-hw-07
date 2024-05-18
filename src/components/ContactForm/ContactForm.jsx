import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import css from "../ContactForm/ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short!!")
    .max(50, "To long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        // id: nanoid(),
        name: values.name,
        number: values.number,
      })

      // addTask(event.target.elements.text.value)
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fields}>
          <label
          // htmlFor={nameFieldId}
          >
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            // id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.fields}>
          <label
          // htmlFor={numberFieldId}
          >
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            autoComplete="off"
            // id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
