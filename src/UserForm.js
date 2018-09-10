import React from 'react';
import { Formik, Field, Form } from 'formik';

const UserForm = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
      render={() => (
        <Form>
          <label htmlFor="firstName">Nome</label>
          <Field name="firstName" placeholder="Nome" />

          <label htmlFor="lastName">Sobrenome</label>
          <Field name="lastName" placeholder="Sobrenome" />

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="email@local.com" type="email" />

          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
);

export default UserForm;
