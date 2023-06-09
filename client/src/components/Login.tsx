// React
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      alert("Login Success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={loginSubmit}
      className="p-10 rounded-md bg-gray-100 flex flex-col gap-2 my-8"
    >
      <h1 className="font-bold text-3xl text-center">Login</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="p-2 outline-none focus:outline-base-orange rounded-md text-sm text-gray-700"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="p-2 outline-none focus:outline-base-orange rounded-md text-sm text-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-base-orange py-2 text-white text-lg font-bold rounded-md mt-2"
      >
        Login
      </button>
    </form>
  );
}
