import { Button, Form, Input, List } from "antd";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const [todo, setTodo] = useLocalStorageState("todo");
  const [todos, setTodos] = useLocalStorageState("todos", []);

  function addTodo({ todo }) {
    const newTodo = { id: +new Date(), text: todo, completed: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  }
  function toggleTodo(todo) {
    setTodos(
      todos.map((item) => ({
        ...item,
        completed: todo.id === item.id ? !item.completed : item.completed,
      }))
    );
  }

  function deleteTodo(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  return (
    <div>
      <Form onFinish={addTodo} onValuesChange={({ todo }) => setTodo(todo)}>
        <Form.Item
          label="Todo"
          name="todo"
          rules={[{ required: true, message: "Please input your todo!" }]}
          initialValue={todo}
        >
          <Input placeholder="add your todo" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Todo
          </Button>
        </Form.Item>
      </Form>
      <List
        bordered
        dataSource={[...todos].reverse()}
        renderItem={(item) => (
          <List.Item>
            <TodoItem
              todo={item}
              toggleTodo={() => toggleTodo(item)}
              deleteTodo={() => deleteTodo(item)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
