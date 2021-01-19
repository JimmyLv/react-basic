import { Button, Layout } from "antd";
import React from "react";
import "./App.css";
import CharacterCount from "./components/CharCounter";
import FormItem from "./components/FormItem";
import { Link } from "./components/Link";
import { TodoList } from "./components/TodoList";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import logo from "./logo.svg";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [username, setUsername] = useLocalStorageState("username", "React");
  const [age, setAge] = useLocalStorageState("age", 0);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`hello ${username}, age ${age}`);
  }

  return (
    <div className="App">
      <Layout>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <Layout>
          <Sider theme="light" width={100}>
            Sider
          </Sider>
          <Content style={{ minHeight: "80vh", padding: "20px" }}>
            <TodoList />

            <Link>{username}</Link>
            <CharacterCount text={username} />
            <form onSubmit={handleSubmit}>
              <FormItem
                label="Username"
                value={username}
                onChange={setUsername}
                placeholder="please input your username..."
              />
              <FormItem
                label="Age"
                type="number"
                value={age}
                onChange={setAge}
                placeholder="what's your age?"
              />
              <Button type="primary" htmlType="submit">
                Say Hi!
              </Button>
            </form>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
