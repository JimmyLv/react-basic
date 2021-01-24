import { TodoItem } from "./TodoItem";

export function Todos({ todos = [], toggleTodo }) {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            toggleTodo={() => toggleTodo(item)}
          />
        ))}
      </ul>
    </div>
  );
}
