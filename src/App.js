import React from "react";
import "./App.css";
import CharacterCount from "./components/CharCounter";
import FormItem from "./components/FormItem";
import { Link } from "./components/Link";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import logo from "./logo.svg";

function App() {
  const [username, setUsername] = useLocalStorageState("username", "React");
  const [age, setAge] = useLocalStorageState("age", 0);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`hello ${username}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
          <button type="submit">Say Hi!</button>
        </form>
      </header>
    </div>
  );
}

export default App;
