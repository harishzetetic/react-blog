import React from "react";
import Page from "./Page";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>We can not find that page</h2>
        <p className="lead text-muted">
          You can always visit the <Link to="/">Home Page</Link> to get a fresh start.
        </p>
      </div>
    </Page>
  );
}

export default NotFound;
