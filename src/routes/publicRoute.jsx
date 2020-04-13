import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/header/header";
import PrivateHeader from "../components/header/privateHeader/privateHeader";

import cookie from "js-cookie";

// const history = createBrowserHistory();
export default function PublicRoute({ component: Component, ...rest }) {
  const token = cookie.get("token");
  const checkIt = { ...rest };
  console.log("checkIt", checkIt);
  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          {token === "123" ? (
            <Redirect to="/home" />
          ) : (
            <>
              <Header />
              <Component {...props} />
            </>
          )}
        </>
      )}
    />
  );
}
