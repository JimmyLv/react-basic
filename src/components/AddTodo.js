import { useLocalStorageValue } from "../hooks/useLocalStorageValue";

export function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useLocalStorageValue("todo");

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
