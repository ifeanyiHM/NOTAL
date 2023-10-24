import { Link } from "react-router-dom";

function InvalidPage() {
  return (
    <div className="invalid-page">
      <h1>
        <span>O</span>ops!
      </h1>
      <p>PAGE NOT FOUND</p>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default InvalidPage;
