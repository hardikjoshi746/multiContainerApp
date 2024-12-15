import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      This is Other page
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default OtherPage;
