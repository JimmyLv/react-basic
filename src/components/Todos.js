import { List } from "antd";
import { TodoItem } from "./TodoItem";

export function Todos({ todos = [] }) {
  return (
    <div>
      <List
        dataSource={todos}
        renderItem={(item) => <TodoItem item={item} key={item.id} />}
      />
    </div>
  );
}
