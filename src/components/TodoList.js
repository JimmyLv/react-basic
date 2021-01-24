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

  function toggleTodo(todo) {
    console.log('todo', todo)
    setTodos(
      todos.map((item) => ({
        ...item,
        completed: item.id === todo.id ? !item.completed : item.completed,
      }))
    );
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}
