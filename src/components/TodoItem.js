import React from "react";

export function TodoItem({ toggleTodo, deleteTodo, item }) {
  return (
    <li
      onClick={toggleTodo}
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
    >
      {item.todo}
      <span style={{ marginLeft: 20 }} onClick={deleteTodo}>
        x
      </span>
    </li>
  );
}
