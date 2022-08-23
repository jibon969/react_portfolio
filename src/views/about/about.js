import React from "react";
import { Link } from "react-router-dom";

function about(props) {
  return (
    <div>
      <h2>About Page</h2>
      <Link to="/">About</Link>
    </div>
  );
}

export default about;
