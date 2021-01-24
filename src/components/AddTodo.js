import { Button, Form, Input } from "antd";
import { useLocalStorageValue } from "../hooks/useLocalStorageValue";
import { useTasks } from "../hooks/useTodo";

export function AddTodo() {
  const [newTodo, setNewTodo] = useLocalStorageValue("todo");
  const { addTodo } = useTasks();
  return (
    <Form
      onFinish={(values) => {
        console.log("values", values);
        addTodo(values.todo);
      }}
      onValuesChange={({ todo }) => {
        console.log("todo", todo);
        setNewTodo(todo);
      }}
      initialValues={{ todo: newTodo }}
    >
      <Form.Item
        label="Todo"
        name="todo"
        rules={[{ required: true, message: "Please input your todo!" }]}
      >
        <Input placeholder="Please add your todo" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
}
