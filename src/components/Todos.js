import { TodoItem } from './TodoItem'

export function Todos({ todos = [] }) {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
