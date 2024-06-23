import React, { useState } from "react";
import AuthorForm from "../components/AuthorForm";
import AuthorList from "../components/AuthorList";
import "./AuthorsPage.css";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAuthorSubmit = (values, { resetForm }) => {
    if (editingAuthor) {
      setAuthors(
        authors.map((author) =>
          author.id === editingAuthor.id ? values : author
        )
      );
      setEditingAuthor(null);
    } else {
      setAuthors([...authors, { ...values, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (author) => {
    setEditingAuthor(author);
  };

  const handleDelete = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <div className="authors-page-container">
      <AuthorForm
        initialValues={
          editingAuthor || { name: "", birthDate: "", biography: "" }
        }
        onSubmit={handleAuthorSubmit}
      />
      <AuthorList
        authors={authors}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AuthorsPage;
