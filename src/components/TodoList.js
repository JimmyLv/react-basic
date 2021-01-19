import { Button, Col, Form, Input, List, Row } from "antd";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const [todo, setTodo] = useLocalStorageState("todo");
  const [todos, setTodos] = useLocalStorageState("todos", []);

  function addTodo() {
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
      <Form onFinish={addTodo}>
        <Row>
          <Col>
            <Input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder={"add your todo"}
            />
          </Col>
          <Col>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Col>
        </Row>
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
