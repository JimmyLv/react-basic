import { useLocalStorageValue } from "../hooks/useLocalStorageValue";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export default function TodoList() {
  const [todos, setTodos] = useLocalStorageValue("todos", []);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        id: +new Date(),
        todo: todo,
        completed: false,
      },
    ]);
  }
  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}
