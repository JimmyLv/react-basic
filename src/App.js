import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`hello ${name}!`);
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>Hello World!</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit">Hello</button>
      </form>
    </div>
  );
}

export default App;
