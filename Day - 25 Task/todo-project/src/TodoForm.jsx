import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({
        task,
        description,
        status: "not completed",
      });
      setTask("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
