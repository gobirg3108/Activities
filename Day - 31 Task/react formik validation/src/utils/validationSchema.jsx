import * as Yup from "yup";

export const bookValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  isbn: Yup.string()
    .required("ISBN is required")
    .length(13, "ISBN must be 13 characters"),
  publicationDate: Yup.date().required("Publication Date is required"),
});

export const authorValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  birthDate: Yup.date().required("Birth Date is required"),
  biography: Yup.string().required("Biography is required"),
});
