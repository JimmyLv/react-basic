import { Layout } from 'antd'
import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { TaskProvider } from './hooks/useTodo'
import logo from './logo.svg'

const { Header, Content, Footer } = Layout;

function App() {
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
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
