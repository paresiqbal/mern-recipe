// RRD
import { Link, useNavigate } from "react-router-dom";

// Library
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh oh! We've got a problem. </h1>
      <p>This migh be our problem 😥</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
