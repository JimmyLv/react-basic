import { useContext } from "react";
import TaskContext from "../hooks/useTodo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export default function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useContext(TaskContext);
  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
