import { TodoItem } from "./TodoItem";

export function Todos({ todos = [], toggleTodo, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            toggleTodo={() => toggleTodo(item)}
            deleteTodo={() => deleteTodo(item)}
          />
        ))}
      </ul>
    </div>
  );
}
