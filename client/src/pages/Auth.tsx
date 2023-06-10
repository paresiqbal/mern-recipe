// React
import { useState } from "react";

// Components
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  // Toggle tabs
  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="container lg:w-min">
      {activeTab === "login" ? <Login /> : <Register />}
      <div className="flex gap-48 justify-center text-white p-4 rounded-md font-bold">
        <button
          onClick={() => handleTabChange("login")}
          className={`bg-gray-200 px-4 py-2 rounded ${
            activeTab === "login" ? "bg-teal-500 text-white" : ""
          }`}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange("register")}
          className={`bg-gray-200 px-4 py-2 rounded ${
            activeTab === "register" ? "bg-sky-500 text-white" : ""
          }`}
        >
          Register
        </button>
      </div>
    </div>
  );
}
