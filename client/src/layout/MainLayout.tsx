// RRD
import { Outlet } from "react-router-dom";

// assest
import wave from "../assets/wave.svg";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <main>
        <Navbar />
        <Outlet />
      </main>
      <img
        src={wave}
        className="w-full absolute inset-x-0 bottom-0 object-bottom"
      />
    </div>
  );
}
