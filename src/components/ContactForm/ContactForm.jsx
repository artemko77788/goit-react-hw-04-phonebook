import PropTypes from 'prop-types';

import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function ContactForm({ submit }) {
  const handleSubmite = (values, { resetForm }) => {
    const id = nanoid();
    submit({ ...values, id });
    resetForm();
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.number().required(),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmite}
      className={s.form}
      validationSchema={SignupSchema}
    >
      <Form>
        <label htmlFor="name" className={s.label}>
          Name:
        </label>
        <div>
          <ErrorMessage name="name" />
        </div>

        <Field
          placeholder={'Enter your  Name'}
          className={s.input}
          type="text"
          name="name"
        />

        <label htmlFor="number" className={s.label}>
          Number:
        </label>
        <div>
          <ErrorMessage name="number" />
        </div>

        <Field
          placeholder={'Enter your  Number'}
          className={s.input}
          type="tel"
          name="number"
        />

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
