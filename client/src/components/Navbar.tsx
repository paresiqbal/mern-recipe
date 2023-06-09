// RRD
import { Link, NavLink } from "react-router-dom";

// Assests
import home from "../assets/home.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-sm">
      <NavLink
        to={"/"}
        aria-label="Homepage"
        className="flex flex-row items-center gap-2 py-2 px-4 hover:outline outline-orange-500 rounded-md"
      >
        <img src={home} alt="" width={20} height={20} />
        <span className="font-bold text-orange-500">Budgetin</span>
      </NavLink>
      <div className="flex items-center justify-end gap-4 text-gray-900 font-semibold">
        <Link to={"/create-recipe"}>Create</Link>
        <Link to={"/save-recipe"}>Saved</Link>
        <Link
          to={"/Auth"}
          className="font-bold text-orange-500 py-2 px-4 hover:outline outline-orange-500 rounded-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
