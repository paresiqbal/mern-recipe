// React
import { useState } from "react";

// Components
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleTabChange("login")}
          className={activeTab === "login" ? "active" : ""}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange("register")}
          className={activeTab === "register" ? "active" : ""}
        >
          Register
        </button>
      </div>
      {activeTab === "login" ? <Login /> : <Register />}
    </div>
  );
}
