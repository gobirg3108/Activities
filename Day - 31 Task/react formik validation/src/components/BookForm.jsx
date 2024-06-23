import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { bookValidationSchema } from "../utils/validationSchema";
import "./BookForm.css";

const BookForm = ({ initialValues, onSubmit }) => {
  return (
    <div className="container book-form-container">
      <h2 className="mb-4 bg-warning py-3 text-center">
        {initialValues.id ? "Edit Book" : "Add Book"}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={bookValidationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                name="title"
                id="title"
                className={`form-control ${
                  touched.title && errors.title ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <Field
                type="text"
                name="author"
                id="author"
                className={`form-control ${
                  touched.author && errors.author ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="author"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN Number</label>
              <Field
                type="text"
                name="isbn"
                id="isbn"
                className={`form-control ${
                  touched.isbn && errors.isbn ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="isbn"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="publicationDate">Publication Date</label>
              <Field
                type="date"
                name="publicationDate"
                id="publicationDate"
                className={`form-control ${
                  touched.publicationDate && errors.publicationDate
                    ? "is-invalid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="publicationDate"
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

export default BookForm;
