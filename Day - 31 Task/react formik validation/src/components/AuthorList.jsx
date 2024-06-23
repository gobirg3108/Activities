import React from "react";

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div className="container mt-4 author-list-container">
      <h2 className="mb-4">Author List</h2>
      <ul className="list-group">
        {authors.map((author) => (
          <li key={author.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>{author.name}</div>
              <div>
                <button
                  onClick={() => onEdit(author)}
                  className="btn btn-warning btn-sm mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(author.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
