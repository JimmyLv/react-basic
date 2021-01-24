import { Layout } from "antd";
import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { useLocalStorageValue } from "./hooks/useLocalStorageValue";
import logo from "./logo.svg";
import TaskContext, { TaskProvider } from "./hooks/useTodo";

const { Header, Content, Sider } = Layout;

function App() {
  const [name, setName] = useLocalStorageValue("name", "React");
  const [age, setAge] = useLocalStorageValue("age", 0);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`hello ${name}!`);
  }

  return (
    <div className="App">
      <Header theme="light">
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Content>
        <TaskProvider>
          <TodoList />
        </TaskProvider>
        <hr />
      </Content>
      <Sider>Sider</Sider>
    </div>
  );
}

export default App;
