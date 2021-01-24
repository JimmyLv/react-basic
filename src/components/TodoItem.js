import React from "react";
import TaskContext from "../hooks/useTodo";

export function TodoItem({ item }) {
  const { theme, toggleTodo, deleteTodo } = React.useContext(TaskContext);
  return (
    <li>
      <span
        onClick={() => toggleTodo(item)}
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          color: theme,
        }}
      >
        {item.todo}
      </span>
      <span style={{ marginLeft: 20 }} onClick={() => deleteTodo(item)}>
        x
      </span>
    </li>
  );
}
