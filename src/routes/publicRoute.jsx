import cookie from "js-cookie";
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Header from "../components/header/header";

// const history = createBrowserHistory();
export default function PublicRoute({ component: Component, ...rest }) {
  const location = useLocation();
  const token = cookie.get("token");
  console.log("location.pathname", location.pathname);
  const pathWithoutHeader =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          {!!token ? (
            <Redirect to="/dashboard" />
          ) : (
            <>
              {!pathWithoutHeader && <Header />}
              <Component {...props} />
            </>
          )}
        </>
      )}
    />
  );
}
