// RRD
import { Outlet } from "react-router-dom";

// assest
import wave from "../assets/wave.svg";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <main>
        <Outlet />
      </main>
      <img
        src={wave}
        className="w-full absolute inset-x-0 bottom-0 object-bottom"
      />
    </div>
  );
}
