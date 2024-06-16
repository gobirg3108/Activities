// src/TodoItem.js
import React, { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      task,
      description,
      status,
    });
    setIsEditing(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="mb-2">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
              </select>
            </div>
            <button className="btn btn-success me-2" onClick={handleUpdate}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{todo.task}</h5>
            <p className="card-text">{todo.description}</p>
            <p className="card-text">
              <small className="text-muted">{todo.status}</small>
            </p>
            <button
              className="btn btn-warning me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
