import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <div className="home" id="home">
        <div className="info">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Go back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
