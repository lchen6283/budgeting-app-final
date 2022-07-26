import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="header">
        <Link to="/budget">Budget App</Link>
      </h1>
      <button>
        <Link to="/budget/new">New Transaction</Link>
      </button>
    </nav>
  );
}
