import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authorValidationSchema } from "../utils/validationSchema";
import "./AuthorForm.css";

const AuthorForm = ({ initialValues, onSubmit }) => {
  return (
    <div className="container author-form-container">
      <h2 className="mb-4 text-center bg-dark text-white py-3">
        {initialValues.id ? "Edit Author" : "Add Author"}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={authorValidationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                className={`form-control ${
                  touched.name && errors.name ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Birth Date</label>
              <Field
                type="date"
                name="birthDate"
                id="birthDate"
                className={`form-control ${
                  touched.birthDate && errors.birthDate ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="birthDate"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="biography">Biography</label>
              <Field
                as="textarea"
                name="biography"
                id="biography"
                className={`form-control ${
                  touched.biography && errors.biography ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="biography"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthorForm;
