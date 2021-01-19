import { CloseOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      <Popconfirm
        title="Are you sure to delete this todo?"
        onConfirm={deleteTodo}
        okText="Yes"
        cancelText="No"
      >
        <CloseOutlined />
      </Popconfirm>
    </div>
  );
}
