import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="add_journal">
      <Link to="create">+</Link>
      <span>create</span>
    </div>
  );
}

export default Button;
