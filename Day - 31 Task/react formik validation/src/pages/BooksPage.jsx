import React, { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleBookSubmit = (values, { resetForm }) => {
    if (editingBook) {
      setBooks(
        books.map((book) => (book.id === editingBook.id ? values : book))
      );
      setEditingBook(null);
    } else {
      setBooks([...books, { ...values, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="container mt-4">
      <BookForm
        initialValues={
          editingBook || {
            title: "",
            author: "",
            isbn: "",
            publicationDate: "",
          }
        }
        onSubmit={handleBookSubmit}
      />
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default BooksPage;
