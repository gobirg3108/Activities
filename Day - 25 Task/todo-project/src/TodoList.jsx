// src/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
