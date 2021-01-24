import { createContext, useContext } from "react";
import { useLocalStorageValue } from "./useLocalStorageValue";

const TaskContext = createContext({});

export const useTasks = () => useContext(TaskContext);

export function TaskProvider({ children }) {
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
    setTodos(
      todos.map((item) => ({
        ...item,
        completed: item.id === todo.id ? !item.completed : item.completed,
      }))
    );
  }
  function deleteTodo(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  return (
    <TaskContext.Provider value={{ todos, toggleTodo, deleteTodo, addTodo }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
