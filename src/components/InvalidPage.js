import { Link } from "react-router-dom";

function InvalidPage() {
  return (
    <div className="invalid-page">
      <p>
        The page is invalid. Please click the button below to go back to the
        homepage.
      </p>
      <Link to="/">Hompage</Link>
    </div>
  );
}

export default InvalidPage;
