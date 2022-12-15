import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSendData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/user", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <form className="form-wrapper">
        <div className="input-container">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button onClick={handleSendData} type="button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
