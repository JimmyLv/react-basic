import { useLocalStorageValue } from "../hooks/useLocalStorageValue";
import { useTasks } from "../hooks/useTodo";

export function AddTodo() {
  const [newTodo, setNewTodo] = useLocalStorageValue("todo");
  const { addTodo } = useTasks();

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          addTodo(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}
