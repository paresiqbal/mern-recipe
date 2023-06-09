import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Register complete");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={registerSubmit}
      className="p-10 rounded-md bg-gray-100 flex flex-col gap-2 my-8"
    >
      <h1 className="font-bold text-3xl text-center">Register</h1>
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
        Register
      </button>
    </form>
  );
}
