import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

type User = {
  name: string;
  email: string;
  id: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await axios.get<User[]>("/mouad");

      setUsers(users.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.name} - {user.email}
            </div>
          );
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
