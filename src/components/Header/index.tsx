import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-title">
          <Link to="/" className="header-title-link">
            <h1>Github API</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
