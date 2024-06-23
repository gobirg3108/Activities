import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h2>Book List</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            {book.title} by {book.author}
            <button
              onClick={() => onEdit(book)}
              className="btn btn-warning btn-sm float-right ml-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book.id)}
              className="btn btn-danger btn-sm float-right"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
