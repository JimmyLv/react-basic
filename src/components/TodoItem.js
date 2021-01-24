import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox, Col, Popconfirm, Row } from 'antd'
import React from "react";
import TaskContext from "../hooks/useTodo";

export function TodoItem({ item: todo }) {
  const { toggleTodo, deleteTodo } = React.useContext(TaskContext);
  return (
    <Row justify="space-between">
      <Col>
        <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo)} />
      </Col>
      <Col style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.todo}
      </Col>
      <Col>
        <Popconfirm
          title="Are you sure to delete this todo?"
          onConfirm={() => deleteTodo(todo)}
          okText="确定"
          cancelText="取消"
        >
          <DeleteOutlined />
        </Popconfirm>
      </Col>
    </Row>
  );
}
