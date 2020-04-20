import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import PrivateHeader from "../components/header/privateHeader/privateHeader";

import cookie from "js-cookie";

// const history = createBrowserHistory();
export default function PublicRoute({ component: Component, ...rest }) {
  const location = useLocation();
  const token = cookie.get("token");

  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          {token === "123" ? (
            <Redirect to="/home" />
          ) : (
            <>
              {location.pathname !== ("/login" || "/register") && <Header />}
              <Component {...props} />
            </>
          )}
        </>
      )}
    />
  );
}
