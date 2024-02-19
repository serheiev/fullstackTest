import React, { useState } from "react";
import { registration } from "../../actions/user";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "username":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <label>Ім'я користувача:</label>
        <input
          type="text"
          name="username"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          registration(email, password, name);
        }}
      >
        Registration
      </button>
    </div>
  );
};
